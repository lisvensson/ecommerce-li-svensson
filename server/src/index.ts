import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import productsRouter from "./routes/products";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server connected!");
});

app.use("/api/products", productsRouter)

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});