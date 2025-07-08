import mongoose from "mongoose";
const { Schema } = mongoose;

const orderItemSchema = new Schema({
    orderId: { type: Schema.Types.ObjectId, ref: "Order"},
    productId: { type: Schema.Types.ObjectId, ref: "Product"},
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { versionKey: false });

const OrderItemModel = mongoose.model("OrderItem", orderItemSchema, "orderItems");
export default OrderItemModel;