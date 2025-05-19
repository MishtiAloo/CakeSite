import express from "express";
import {
  addOffer,
  deleteOffer,
  getAllOffers,
  updateOffer,
} from "../controllers/offer.controller.js";

const router = express.Router();

router.get("/", getAllOffers);
router.post("/", addOffer);
router.put("/", updateOffer);
router.delete("/", deleteOffer);

export default router;
