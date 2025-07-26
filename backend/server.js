import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";
import offerRoute from "./routes/offer.route.js";
import reviewRoute from "./routes/review.route.js";
import orderRoute from "./routes/order.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/offers", offerRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/orders", orderRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(
    "server started at http://localhost:",
    +PORT + " hello, nodemon works fine, proud of myself.",
  );
});
