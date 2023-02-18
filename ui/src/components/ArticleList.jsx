import React from "react";
import { Link } from "react-router-dom";
function ArticleList({ articles }) {
  return (
    <>
      {articles.map((article) => (
        <Link key={article.name} to={`/article/${article.name}`}>
          <div>
            <h2 className="text-2xl font-bold my-2">{article.title}</h2>
            <p> {article.content[0]}...</p>
            <hr className="divide-black mt-3" />
          </div>
        </Link>
      ))}
    </>
  );
}

export default ArticleList;
