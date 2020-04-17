import React from "react";
import { dateConverter } from "../utils/utils";
import Voter from "./Voter";

const CommentsCard = props => {
  const { author, body, comment_id, votes, created_at } = props.comment;
  const { removeCommentFromList, username } = props;
  return (
    <div>
      <p>{body}</p>
      <h4>Written By: {author}</h4>
      <h4>Posted: {dateConverter(created_at)}</h4>
      <Voter votes={votes} id={comment_id} type={"comments"} />
      <br></br>
      {author === username ? (
        <button onClick={() => removeCommentFromList(comment_id)}>
          DELETE Comment
        </button>
      ) : null}
      <hr></hr>
    </div>
  );
};

export default CommentsCard;
