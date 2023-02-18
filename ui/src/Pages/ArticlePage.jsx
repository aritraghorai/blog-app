import React from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQueries, useQueryClient } from "react-query";
import articlesApi from "../Api/articles.api";
import commentApi from "../Api/comment.api";
import CommentList from "../components/CommentList";
import AddComment from "../components/AddComment";
import { useAuthToken } from "../Context/FireBaseAuthContext/FreBaseAuthContext";
import toast from "react-hot-toast";

function ArticlePage() {
  const { id } = useParams();
  const token = useAuthToken();
  const queryClient = useQueryClient();
  const [{ data, isLoading }, { data: Comments, isLoading: isLoading2 }] =
    useQueries([
      {
        queryKey: ["articles", id],
        queryFn: () => articlesApi.getArticleById(id),
      },
      {
        queryKey: ["comments", id],
        queryFn: () => commentApi.getAllComents(id),
      },
    ]);
  const {
    mutate,
    error,
    isError,
    data: res,
  } = useMutation({
    mutationFn: (data) => commentApi.addNewComment(token, id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
    onError: (error) => {
      toast.error(error.response.data.error);
    },
  });

  if (isLoading || isLoading2) {
    return <div>Loading....</div>;
  }

  const { name, content } = data.data;
  return (
    <div className="p-2 flex flex-col justify-center items-start">
      <h1 className="text-4xl p-3 font-bold">{name}</h1>
      {content.map((ele, index) => {
        return (
          <p className="p-3 text-xl" key={index}>
            {ele}
          </p>
        );
      })}
      <AddComment addComment={mutate} />
      {isLoading2 ? (
        <div>Loading....</div>
      ) : (
        <CommentList comments={Comments.data} />
      )}
    </div>
  );
}

export default ArticlePage;
