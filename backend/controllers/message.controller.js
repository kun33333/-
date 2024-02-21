import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    //从提交的路径中获取获取信息的用户id
    const { id: receiverId } = req.params;
    //从cookie中获取当前登录者的用户id
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      //给消息数组加入newMessage._id
      conversation.message.push(newMessage._id);
    }

    // SOCKET IO 函数

    // await conversation.save(); 这样运行的话会导致newMessage.save()需要等待此行代码运行完毕才能运行
    // await newMessage.save();

    //这样会并行运行
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("sendMessage控制器错误", error.message);
    res.status(500).json({ error: "内部服务器错误..." });
  }
};

export const getMessage = async (req, res) => {
  try {
    //获取从get请求中传过来的id
    const { id: userToChatId } = req.params;
    //从cookie中获取到当前登录者的id
    const senderId = req.user._id;
    //通过关系数组在数据库中寻找该id所在的Conversation，通过该信息数组去查询到其中的消息数组message，再根据message中的对话id去Message集合中查找对应的对话信息,所用到的方法是populate 直接放回的是一个Message对话信息
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("message");

    if (!conversation) return res.status(200).json([]);

    const message = conversation.message;

    res.status(200).json(message);
  } catch (error) {
    console.log("getMessage控制器错误", error.message);
    res.status(500).json({ error: "内部服务器错误..." });
  }
};
