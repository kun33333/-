import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    //当输入的密码和确认密码不匹配时，返回错误信息
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "密码不匹配" });
    }
    //在此之后调用用户模型,寻找具有该用户名的用户
    const user = await User.findOne({ username });

    if (user) {
      //如果用户名已存在，则返回错误信息
      return res.status(400).json({ error: "用户名已存在" });
    }
    //将密码进行HASH加密，以免数据库泄漏导致用户密码被窃取
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //https://avater-placeholder.iran.liara.run/
    //设置头像
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "男" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      //生成jwt令牌
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      //数据库创建用户信息
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "无效用户数据" });
    }
  } catch (error) {
    console.log("注册控制器记录错误", error.message);
    res.status(500).json({ error: "服务器错误..." });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPassWordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPassWordCorrect) {
      return res.status(400).json({ error: "用户名或密码错误" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("登录控制器记录错误", error.message);
    res.status(500).json({ error: "服务器错误..." });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "已成功注销" });
  } catch (error) {
    console.log("注销控制器记录错误", error.message);
    res.status(500).json({ error: "服务器错误..." });
  }
};
