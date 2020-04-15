import React from "react";
import { dateConverter } from "../utils/utils";
import Voter from "./Voter";

const SingleArticleCommentsCard = props => {
  const { author, body, comment_id, votes, created_at } = props.comment;
  return (
    <div className="single-comments">
      <p>{body}</p>
      <h4>Written By: {author}</h4>
      <h4>Posted: {dateConverter(created_at)}</h4>
      <Voter votes={votes} id={comment_id} type={"comments"} />
      <button onClick={() => props.removeCommentFromList(comment_id)}>
        DELETE COMMENT
      </button>
      <hr></hr>
    </div>
  );
};

export default SingleArticleCommentsCard;
