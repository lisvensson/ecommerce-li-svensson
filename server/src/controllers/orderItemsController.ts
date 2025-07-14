import { Request, Response } from "express";
import OrderItemModel from "../models/OrderItemModel";
import OrderModel from "../models/OrderModel";

//Update quantity for orderItem by ID
export const updateOrderItemQuantity = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        if (typeof quantity !== "number" || quantity < 1) {
            return res.status(400).json({ message: "Invalid quantity value" });
        }

        const updatedOrderItem = await OrderItemModel.findByIdAndUpdate(
            id,
            { quantity, updatedAt: new Date() },
            { new: true }
        );

        if (!updatedOrderItem) {
            return res.status(404).json({ message: "Order item not found" });
        }

        const allOrderItems = await OrderItemModel.find({ orderId: updatedOrderItem.orderId });

        const newTotalPrice = allOrderItems.reduce((acc, item) => {
            return acc + item.unitPrice * item.quantity;
        }, 0);

        await OrderModel.findByIdAndUpdate(updatedOrderItem.orderId, {
            totalPrice: newTotalPrice,
            updatedAt: new Date()
        });

        res.status(200).json({ message: "Order item updated", item: updatedOrderItem });
    } catch (error) {
        console.error("Error updating order item:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Delete order item by ID
export const deleteOrderItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleteOrderItem = await OrderItemModel.findByIdAndDelete(id);

        if (!deleteOrderItem) {
        return res.status(404).json({ message: "Order item not found" });
        }

        const remainingOrderItems = await OrderItemModel.find({ orderId: deleteOrderItem.orderId });

        const newTotalPrice = remainingOrderItems.reduce((acc, item) => {
            return acc + item.unitPrice * item.quantity;
        }, 0);

        await OrderModel.findByIdAndUpdate(deleteOrderItem.orderId, {
            totalPrice: newTotalPrice,
            updatedAt: new Date()
        });

        res.status(200).json({ message: "Order item deleted" });
    } catch (error) {
        console.error("Error deleting order item:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};