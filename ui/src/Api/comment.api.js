import axios from "axios";
import config from "../utils/config";

const getAllComents = async (articleId) => {
  const response = await axios.get(
    `${config.url}/article/${articleId}/comment`
  );
  return response.data;
};

const addNewComment = async (toekn, articleId, data) => {
  const response = await axios.post(
    `${config.url}/article/${articleId}/comment`,
    data,
    {
      headers: {
        authtoken: toekn,
      },
    }
  );
  return response.data;
};

export default {
  getAllComents,
  addNewComment,
};
