import express from "express";
import { deleteOrderItem, updateOrderItemQuantity } from "../controllers/orderItemsController";

const router = express.Router();

router.patch("/:id", updateOrderItemQuantity);
router.delete("/:id", deleteOrderItem);

export default router;