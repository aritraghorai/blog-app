import axios from "axios";
import config from "../utils/config";

const getAllArticles = async () => {
  const response = await axios.get(`${config.url}/article`);
  return response.data;
};
const getArticleById = async (name) => {
  const response = await axios.get(`${config.url}/article/${name}`);
  return response.data;
};

export default {
  getAllArticles,
  getArticleById,
};
