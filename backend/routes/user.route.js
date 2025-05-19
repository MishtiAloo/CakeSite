import express from "express";
import {
  addUser,
  deleteUser,
  getAllUsers,
  loginUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", addUser);
router.put("/", updateUser);
router.delete("/", deleteUser);
router.post("/login", loginUser);

export default router;
