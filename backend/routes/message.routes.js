import express from "express";
import { sendMessage, getMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/proteceRoute.js";
const router = express.Router();

//protectRoute中间件用于检测jwt令牌的有效性从而达到检测该用户是否登录
//获取信息
router.get("/:id", protectRoute, getMessage);
//发送信息
router.post("/send/:id", protectRoute, sendMessage);

export default router;
