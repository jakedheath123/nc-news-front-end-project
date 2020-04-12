import React from "react";
import { dateConverter } from "../utils/utils";

const SingleArticleCard = props => {
  const {
    title,
    body,
    created_at,
    votes,
    topic,
    author,
    comment_count
  } = props.article;

  return (
    <article>
      <h2>{title}</h2>
      <h3>Written By: {author}</h3>
      <p>{body}</p>
      <h4>Topic: {topic}</h4>
      <h4>Votes: {votes}</h4>
      <h4>Comment Count: {comment_count}</h4>
      <h4>Published: {dateConverter(created_at)}</h4>
    </article>
  );
};

export default SingleArticleCard;
