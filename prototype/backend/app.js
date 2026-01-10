const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const path=require("path");


const connectDB =require("./config/db.js");
const authRoutes =require("./routes/authroutes.js");

const app = express();
const PORT = process.env.PORT|| 5000;

connectDB();

app.use(cors());                     
app.use(express.json());             
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"..","frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"../frontend/pages","login.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname,"../frontend/pages","signup.html"));
});

app.get("/user_dashboard", (req, res) => {
  res.sendFile(path.join(__dirname,"../frontend/pages","user_dashboard.html"));
});

app.use("/auth",authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});