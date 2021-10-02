import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/products", productRoutes);
app.use("/api/products", productRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5100;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`.bold
  )
);
