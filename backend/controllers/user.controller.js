import { toast } from "react-toastify";
import User from "../models/user.model.js";

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ success: true, message: "All users have been fetched", data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server er bhitre jhamela" });
    }
};

// Add a new user
export const addUser = async (req, res) => {
    const requestedUser = req.body;

    const newUser = new User(requestedUser);

    try {
        await newUser.save();
        res.status(201).json({ success: true, message: "User added successfully", data: newUser });
    } catch (error) {

        // Handle duplicate key error
        if (error.code === 11000) {
            const duplicateField = Object.keys(error.keyValue)[0];
            return res.status(409).json({
                success: false,
                message: `${duplicateField} already exists. Please use a different one.`,
                field: duplicateField,
            });
        }

        res.status(500).json({ success: false, message: "Server er bhitre jhamela" });  
    }
};

// Update user
export const updateUser = async (req, res) => {
    const { _id, ...rest } = req.body;

    try {
        const user = await User.findById(_id);

        if (!user) {
            return res.status(404).json({ success: false, message: "user not found" });
        }

        Object.assign(user, rest);
        await user.save();

        res.status(200).json({ success: true, message: "User updated successfully", data: user });
    } catch (error) {
        // Handle duplicate key error
        if (error.code === 11000) {
            const duplicateField = Object.keys(error.keyValue)[0];
            return res.status(409).json({
                success: false,
                message: `${duplicateField} already exists. Please use a different one.`,
                field: duplicateField,
            });
        }

        res.status(500).json({ success: false, message: "Server er bhitre jhamela" });
    }
};


// Delete user
export const deleteUser = async (req, res) => {
    const { _id } = req.body;

    try {
        const user = await User.findById(_id);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        await user.deleteOne();

        res.status(200).json({ success: true, message: "User deleted successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server er bhitre jhamela" });
    }
};

export const loginUser = async (req, res) => {
    const {userName, userPassword} = req.body;

    try {
        const validUser = await User.findOne({userName: userName});

        if (!validUser) 
            return res.status(404).json({success: false, message: "User not found"});
        else {
            if (validUser.userPassword === userPassword)
                return res.status(200).json({success: true, message: "Login successful", data: validUser});
            else 
                return res.status(401).json({success: false, message: "Invalid password"});
        }
    } catch (error) {
        res.status(500).json({success: false, message: "Server er bhitre jhamela"}); 
    }
}
