require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

//create-database-connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connection established successfully.");
  })
  .catch((error) => {
    console.error("❌ Failed to connect to MongoDB:");
    console.error("Reason:", error.message);
    process.exit(1); // Exit process on failure
  });

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
