import express from "express";
import { addReview, getAllReviews } from "../controllers/review.controller.js";

const router = express.Router();

router.get("/", getAllReviews);
router.post("/", addReview);

export default router;
