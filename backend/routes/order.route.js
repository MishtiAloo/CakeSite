import express  from "express";
import { addOrder, deleteOrder, getAllOrders, updateOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.get ("/", getAllOrders);
router.post ("/", addOrder);
router.put ("/", updateOrder);
router.delete ("/", deleteOrder);

export default router;