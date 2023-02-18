import ArticleModel from "../models/articles.model.js";

const getAllArticle = async (req, res) => {
  const allArticles = await ArticleModel.find({});
  res.json({
    data: allArticles,
  });
};

const getArticleByName = async (req, res) => {
  const name = req.params.name;
  const allArticles = await ArticleModel.findOne({ name: name });
  res.json({
    data: allArticles,
  });
};

export default {
  getAllArticle,
  getArticleByName,
};
