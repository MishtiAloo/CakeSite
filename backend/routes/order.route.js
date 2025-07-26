import express from "express";
import {
  addOrder,
  deleteOrder,
  getAllOrders,
  getAllOrdersFromUser,
  getCartOrders,
  updateOrder,
} from "../controllers/order.controller.js";

const router = express.Router();

router.get("/", getAllOrders);
router.post("/", addOrder);
router.put("/", updateOrder);
router.delete("/", deleteOrder);

router.post("/cart", getCartOrders);
router.post("/allorders", getAllOrdersFromUser);

export default router;
