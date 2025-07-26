import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    productImage: {
      type: String,
      default: "",
    },
    productDescription: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productType: {
      type: String,
      required: true,
      enum: ["cake", "snacks"],
    },
    offerRunning: {
      type: Boolean,
      default: false,
    },
    totalBuys: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    ingredients: [
      {
        type: String,
      },
    ],
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    discriminatorKey: "productType",
  },
);

const Product = mongoose.model("Product", productSchema);

Product.discriminator(
  "cake",
  new mongoose.Schema({
    cakeType: {
      type: String,
      required: true,
      enum: [
        "chocolate",
        "vanilla",
        "pastry",
        "pound cake",
        "fruity flavour",
        "custom cake",
        "exotic",
        "seasonal",
      ],
    },
    cakeDimention: {
      type: String,
      default: "medium",
    },
    minimumPound: {
      type: Number,
      required: true,
      default: 1,
    },
  }),
);

Product.discriminator(
  "snacks",
  new mongoose.Schema({
    snackType: {
      type: String,
      required: true,
      enum: ["sweet", "spicy", "daily"],
    },
    snackDimention: {
      type: String,
      default: "medium",
      enum: ["small", "medium", "large"],
    },
    minimumOrder: {
      type: Number,
      required: true,
      default: 1,
    },
    perUnitWeight: {
      type: Number,
      required: true,
    },
  }),
);

export default Product;
