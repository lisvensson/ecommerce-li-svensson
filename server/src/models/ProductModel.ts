import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
    name: { type: String, required: true },
    details: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    size: { type: String, required: true },
    images: [{ type: String, required: true }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { versionKey: false });

const ProductModel = mongoose.model("Product", productSchema, "products");
export default ProductModel;