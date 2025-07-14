import { Request, Response } from "express";
import bcrypt from "bcrypt";
import UserModel from "../models/UserModel";

//Get all users
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Get specific user by ID
export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Get specific user by email
export const getUserByEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        const user = await UserModel.findOne({ email: email });

        if (!user) {
            res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user by email:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Create a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        const { firstName,lastName, address, postalCode, city, country, phone, email, password, role } = req.body;
        
        if (!firstName || !lastName || !address || !postalCode || !city || !country || !phone || !email || !password || !role) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email is already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 15);

        const newUser = new UserModel({
            firstName,
            lastName,
            address,
            postalCode,
            city,
            country,
            phone,
            email,
            password: hashedPassword,
            role,
            createdAt: new Date(),
            updatedAt: null
        });

        await newUser.save();

        res.status(201).json({ 
            message: "User created", 
            _id: newUser._id
        });

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Update user by ID
export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateFields = req.body;

        if (updateFields.password) {
            updateFields.password = await bcrypt.hash(updateFields.password, 15);
        }

        if (!Object.keys(updateFields).length) {
            return res.status(400).json({ message: "No updated fields provided" });
        }

        const updatedUser = await UserModel.findByIdAndUpdate(
            id,
            { ...updateFields, updatedAt: new Date() },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User updated",
            user: updatedUser
        });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Delete user by ID
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deleteUser = await UserModel.findByIdAndDelete(id);

        if (!deleteUser) {
        return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};