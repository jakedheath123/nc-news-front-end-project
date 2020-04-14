import React from "react";
import { dateConverter } from "../utils/utils";

const SingleArticleCommentsCard = props => {
  const { author, body, comment_id, votes, created_at } = props.comment;
  return (
    <>
      <p>{body}</p>
      <h4>Written By: {author}</h4>
      <h4>Votes: {votes}</h4>
      <h4>Posted: {dateConverter(created_at)}</h4>
      <button onClick={() => props.removeCommentFromList(comment_id)}>
        DELETE COMMENT
      </button>
      <hr></hr>
    </>
  );
};

export default SingleArticleCommentsCard;
