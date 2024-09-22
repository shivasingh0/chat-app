import express from "express";
import dotenv from "dotenv";
import connectToDb from "./config/dbConnection.js";
import colors from "colors"
import userRoutes from "./routes/userRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();
dotenv.config();
connectToDb();

app.use(express.json()) // to accept json data

const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// routes
app.use("/api/user", userRoutes);

// middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.yellow.bold);
});
