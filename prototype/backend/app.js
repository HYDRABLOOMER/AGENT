const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser=require("cookie-parser")

const path=require("path");

const connectDB =require("./config/db.js");
const authRoutes =require("./routes/authroutes.js");
const userRoutes=require("./routes/userRoutes.js")

const app = express();
const PORT = process.env.PORT|| 5000;

connectDB();

app.use(cors());                     
app.use(express.json());             
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"..","frontend")));
app.use(cookieParser());


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"../frontend/pages","login.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname,"../frontend/pages","signup.html"));
});
app.get("/knowledge_quiz", (req, res) => {
  res.sendFile(path.join(__dirname,"../frontend/pages","knowledge_quiz.html"));
});

app.get("/eco_tasks", (req, res) => {
  res.sendFile(path.join(__dirname,"../frontend/pages","eco_tasks.html"));
});

app.get("/community_issues", (req, res) => {
  res.sendFile(path.join(__dirname,"../frontend/pages","community_issues.html"));
});

app.get("/leaderboards", (req, res) => {
  res.sendFile(path.join(__dirname,"../frontend/pages","leaderboards.html"));
});

app.get("/user_dashboard", (req, res) => {
  res.sendFile(path.join(__dirname,"../frontend/pages","user_dashboard.html"));
});

app.use("/auth",authRoutes);
app.use("/api/users", userRoutes);

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