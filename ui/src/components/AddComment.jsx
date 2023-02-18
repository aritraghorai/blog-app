import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Context/FireBaseAuthContext/FreBaseAuthContext";

const AddComment = ({ addComment }) => {
  const { token } = useAuthContext();
  const [content, setContent] = useState("");
  const addCommentHandler = async (e) => {
    e.preventDefault();
    addComment({ content });
    setContent("");
  };
  return (
    <div className="p-3">
      {token !== undefined ? (
        <>
          <h2 className="text-xl font-bold">Add Comment</h2>
          <form onSubmit={addCommentHandler}>
            <textarea
              type="text"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              rows={4}
              cols={30}
              name="password"
              className="bg-gray-200 p-3 mt-3 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-black transition duration-500 px-3 pb-3"
            />
            <button
              type="submit"
              className="bg-gray-600 p-3 mt-3 hover:bg-gray-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
            >
              Add Comment
            </button>
          </form>
        </>
      ) : (
        <Link
          to="/login"
          className="bg-gray-600 p-3 mt-3 hover:bg-gray-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
        >
          Login To Comment
        </Link>
      )}
    </div>
  );
};

export default AddComment;
