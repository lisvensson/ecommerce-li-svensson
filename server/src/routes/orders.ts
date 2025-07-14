import express from "express";
import { createOrder, deleteOrder, getAllOrders, getOrderById, getOrderByPaymentId, updateOrder } from "../controllers/ordersController";

const router = express.Router();

router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.get("/payment/:id", getOrderByPaymentId);
router.post("/", createOrder);
router.patch("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;