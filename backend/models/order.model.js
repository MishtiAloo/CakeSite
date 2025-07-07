import mongoose from "mongoose";

const orderSchema = new mongoose.Schema ({

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    toppings: [{
        type: String,
        required: false,
    }],
    writing: {
        type: String,
        required: false,
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
    },
    state: {
        type: String,
        enum: ['in cart', 'checked out', 'ready', 'delivering', 'delivered'],
        default: 'in cart',
    },
    orderedAt: {
        type: Date,
        default: Date.now,
    },

}, {
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

export default Order;