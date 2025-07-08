import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User"},
    totalPrice: { type: Number, required: true },
    paymentStatus: { type: String, required: true },
    paymentId: { type: String, required: true },
    orderStatus: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { versionKey: false });

const OrderModel = mongoose.model("Order", orderSchema, "orders");
export default OrderModel;