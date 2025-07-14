import { Request, Response } from "express";
import OrderModel from "../models/OrderModel";
import OrderItemModel from "../models/OrderItemModel";

//Get all orders
export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orders = await OrderModel.find();
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Get specific order by ID
export const getOrderById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const order = await OrderModel.findById(id).populate("customer");

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        const orderItems = await OrderItemModel.find({ orderId: id });

        return res.status(200).json({
            ...order.toObject(),
            orderItems: orderItems
        });
    } catch (error) {
        console.error("Error fetching order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Get specific order by payment ID
export const getOrderByPaymentId = async (req: Request, res: Response) => {
    try {
        const { id: paymentId } = req.params;
        const order = await OrderModel.findOne({ paymentId }).populate("customer");

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        const orderItems = await OrderItemModel.find({ orderId: order._id });

        return res.status(200).json({
            ...order.toObject(),
            orderItems: orderItems
        });
    } catch (error) {
        console.error("Error fetching order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Create a new order
export const createOrder = async (req: Request, res: Response) => {
    try {
        const { customer, paymentStatus, paymentId, orderStatus,orderItems } = req.body;

        if (!customer || !paymentStatus || !orderStatus || !Array.isArray(orderItems) || orderItems.length === 0) {
        return res.status(400).json({ message: "Missing required fields" });
        }

        const totalPrice = orderItems.reduce((acc, item) => {
        return acc + item.unitPrice * item.quantity;
        }, 0);

        const newOrder = new OrderModel({
        customer,
        totalPrice,
        paymentStatus,
        paymentId: paymentId || null,
        orderStatus,
        createdAt: new Date(),
        updatedAt: new Date()
        });

        await newOrder.save();

        for (const item of orderItems) {
        const newItem = new OrderItemModel({
            orderId: newOrder._id,
            productId: item.productId,
            productName: item.productName,
            unitPrice: item.unitPrice,
            quantity: item.quantity,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        await newItem.save();
        }

        res.status(201).json({
            message: "Order created",
            orderId: newOrder._id
        });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Update order by ID
export const updateOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { paymentStatus, paymentId, orderStatus } = req.body;

        if (!paymentStatus || !paymentId || !orderStatus) {
        return res.status(400).json({ message: "All update fields (paymentStatus, paymentId, orderStatus) are required" });
        }

        const updatedOrder = await OrderModel.findByIdAndUpdate(
        id,
        { paymentStatus, paymentId, orderStatus, updatedAt: new Date() },
        { new: true }
        );

        if (!updatedOrder) {
        return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json({
        message: "Order updated",
        order: updatedOrder
        });
    } catch (error) {
        console.error("Error updating order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Delete order by ID
export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deleteOrder = await OrderModel.findByIdAndDelete(id);

        if (!deleteOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        await OrderItemModel.deleteMany({ orderId: id });

        res.status(200).json({ message: "Order deleted" });
    } catch (error) {
        console.error("Error deleting order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};