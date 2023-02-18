import { Schema, model } from "mongoose";

const articleSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  content: [{ type: String }],
  upvote: {
    type: Number,
    default: 0,
  },
});

const ArticleModel = model("Article", articleSchema, "Article");

export default ArticleModel;
