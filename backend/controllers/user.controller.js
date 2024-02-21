import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    //在数据库中查找除自己以外的其他用户
    const filleredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filleredUsers);
  } catch (error) {
    console.error("getUserForSidebar错误：", error.message);
    res.status(500).json({ error: "服务器错误..." });
  }
};
