import React from "react";

const TopicCard = props => {
  const { title, created_at, votes, author, comment_count } = props.article;
  return (
    <li>
      <h2>{title}</h2>
      <h3>Written By : {author}</h3>
      <h4>Votes : {votes}</h4>
      <h4>Comment Count : {comment_count}</h4>
      <h4>Published : {created_at}</h4>
      <br></br>
      <hr></hr>
    </li>
  );
};

export default TopicCard;
