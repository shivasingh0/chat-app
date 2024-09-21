import express from "express";
import dotenv from "dotenv";
import connectToDb from "./config/dbConnection.js";
import colors from "colors"

const app = express();
dotenv.config();
connectToDb();


const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.yellow.bold);
});
