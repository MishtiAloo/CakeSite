import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    userName: {
        type: String,
        required: true,
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
        required: false,
        unique: true,
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
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: false,
    }],
}, {
    timestamps: true,
}, {
});

const User = mongoose.model('User', userSchema);

export default User;