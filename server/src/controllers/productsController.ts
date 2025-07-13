import { Request, Response } from "express";
import ProductModel from "../models/ProductModel";

//Get all products
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch (error) {
        console.log("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Get specific product by ID
export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        console.log("Error fetching product", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Create a new product
export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, details, description, price, stock, category, size, images } = req.body;

        if (!name || !details || !description || !price || !stock || !category || !size || !images) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const newProduct = new ProductModel({
            name,
            details,
            description,
            price,
            stock,
            category, 
            size,
            images,
            createdAt: new Date(),
            updatedAt: null,
        });

        await newProduct.save();

        res.status(201).json({
            message: "Product created",
            _id: newProduct._id
        })
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Internal server error" });        
    }
};

//Update a product by ID
export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateFields = req.body;

        if (!Object.keys(updateFields).length) {
            return res.status(400).json({ message: "No updated fields provided" });
        }

        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            { ...updateFields, updatedAt: new Date() },
            { new: true }
        );

         if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({
            message: "Product updated",
            product: updatedProduct
        });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Internal server error" });    
    }
};

//Delete a product by ID
export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deleteProduct = await ProductModel.findByIdAndDelete(id);

        if (!deleteProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};