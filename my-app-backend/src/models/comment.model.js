import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    article_name: {
      type: String,
      require: true,
    },
    user_id: {
      type: String,
      require: true,
    },
    postedBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
commentSchema.index(
  { article_name: 1, user_id: 1 },
  {
    unique: true,
  }
);

const CommentModel = mongoose.model("Comment", commentSchema);

export default CommentModel;
