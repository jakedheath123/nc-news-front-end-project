import React from "react";

const SingleArticleCommentsCard = props => {
  const { author, body, comment_id, votes } = props.comment;
  return (
    <>
      <h4>{author}</h4>
      <h4>{comment_id}</h4>
      <h4>{votes}</h4>
      <h4>{body}</h4>
    </>
  );
};

export default SingleArticleCommentsCard;
