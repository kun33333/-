import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  //签署令牌
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  //传递令牌
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //ms
    httpOnly: true, //防止XSS攻击，跨域脚本编写
    sameSite: "strict", //CSRF 攻击 cross-site request forgery 攻击
    secure: process.env.NODE_ENV !== "development",
  });
};
export default generateTokenAndSetCookie;
