import React from "react";
import articles from "./articles";
import ArticleList from "../components/ArticleList";
import { useQuery } from "react-query";
import articlesApi from "../Api/articles.api";

const ArticleListPage = () => {
  const { data, isLoading, isError, error } = useQuery(
    "articles",
    articlesApi.getAllArticles
  );
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="p-3">
      <h1 className="text-3xl font-bold mb-4">Articles</h1>
      <hr />
      <ArticleList articles={data.data} />
    </div>
  );
};

export default ArticleListPage;
