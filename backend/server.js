// const express = require("express");
import express from "express";
// const dotenv = require("dotenv");
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connetToMongoDB from "./db/connectToMongoDB.js";
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json()); //在req.body后使用 JSON 有效负载解析传入请求
app.use(cookieParser());
//使用express提供的中间件
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// app.get("/", (req, res) => {
//   //根路由 http://loaclhost:5000
//   res.send("Hello World!!");
// });

app.listen(PORT, () => {
  connetToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
