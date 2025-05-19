import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    userPassword: {
        type: String,
        required: true
    },
    userPhoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    userAddress: {
        type: String,
        default: ''
    },
    userProfileImage: {
        type: String,
        default: ''
    },
    userLevel: {
        type: Number,
        default: 0
    },
    userState: {
        type: String,
        default: 'new',
        enum: ['active', 'inactive', 'banned', 'new']
    }
}, {
    timestamps: true,
}, {
});

const User = mongoose.model('User', userSchema);

export default User;