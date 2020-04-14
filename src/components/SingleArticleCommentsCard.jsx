import React from "react";

const SingleArticleCommentsCard = props => {
  const { author, body, comment_id, votes, created_at } = props.comment;
  return (
    <>
      <h4>{author}</h4>
      <h4>{votes}</h4>
      <h4>Posted: {created_at}</h4>
      <h4>{body}</h4>
      <button onClick={() => props.removeCommentFromList(comment_id)}>
        DELETE COMMENT
      </button>
      <hr></hr>
    </>
  );
};

export default SingleArticleCommentsCard;
