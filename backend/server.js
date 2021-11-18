import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5100;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`.bold
  )
);

process.on("SIGINT", () => {
  console.log("Bye bye!");
  process.exit();
});

// process.on("uncaughtException", () => {
//   console.log("Bye bye!");
//   process.exit();
// });

// process.on("SIGTERM", () => {
//   console.log("Bye bye!");
//   process.exit();
// });
