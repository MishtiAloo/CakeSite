import mongoose from "mongoose";

const offerSchema = new mongoose.Schema ({
    offerName: {
        type: String,
        required: true,
        unique: true
    },
    offerDescription: {
        type: String,
        required: true
    },
    offerImage: {
        type: String,
        default: ''
    },
    offerDiscount: {
        type: Number,
        required: true
    },
    minimumPurchase: {
        type: Number,
        required: true
    },
    offerType: {
        type: String,
        required: true,
        enum: ['percentage', 'flat', 'free shipping']
    },
    affectedProducts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
});

const Offer = mongoose.model('Offer', offerSchema);

export default Offer;