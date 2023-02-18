import CommentModel from "../models/comment.model.js";

const getAllComments = async (req, res) => {
  const { articleName } = req.params;
  const comments = await CommentModel.find({ article_name: articleName });
  res.json({
    data: comments,
  });
};
const addNewComment = async (req, res) => {
  const { articleName } = req.params;
  const { content } = req.body;
  try {
    const newComment = await CommentModel.create({
      user_id: req.user.user_id,
      content,
      article_name: articleName,
      postedBy: req.user.name,
    });
    res.status(201).json({
      data: newComment,
    });
  } catch (error) {
    res.status(400).json({
      error: "You already commented you can't comment now",
    });
  }
};

export default {
  getAllComments,
  addNewComment,
};
