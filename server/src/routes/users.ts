import express from "express";
import { createUser, deleteUser, getAllUsers, getUserByEmail, getUserById, updateUser } from "../controllers/usersController";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/email/:email", getUserByEmail);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;