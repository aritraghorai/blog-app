import React from "react";

function CommentList({ comments }) {
  return (
    <>
      {comments.length !== 0 ? (
        <div className="p-3">
          <h1 className="text-xl font-bold">Comments</h1>
          {comments.map((comment) => {
            return (
              <div key={comment._id}>
                <h1 className="text-xl capitalize">{comment.content}</h1>
                <h1 className="font-bold">{comment.postedBy}</h1>
                <hr className="mt-1 bg-black" />
              </div>
            );
          })}
        </div>
      ) : (
        <h1 className="text-xl font-bold p-3 ">No Comment Till Now</h1>
      )}
    </>
  );
}

export default CommentList;
