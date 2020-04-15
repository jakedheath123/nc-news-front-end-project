import React from "react";
import { dateConverter } from "../utils/utils";
import Voter from "./Voter";

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
    <article className="article">
      <h2>{title}</h2>
      <h3>Author: {author}</h3>
      <p>{body}</p>
      <h4>Topic: {topic}</h4>
      <Voter votes={votes} />
      <h4>Comment Count: {comment_count}</h4>
      <h4>Published: {dateConverter(created_at)}</h4>
    </article>
  );
};

export default SingleArticleCard;
