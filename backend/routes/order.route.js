import express  from "express";
import { addOrder, deleteOrder, getAllOrders, getCartOrders, updateOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.get ("/", getAllOrders);
router.post ("/", addOrder);
router.put ("/", updateOrder);
router.delete ("/", deleteOrder);

router.get('/cart', getCartOrders);

export default router;