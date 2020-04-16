import React from "react";
import { dateConverter } from "../utils/utils";
import Voter from "./Voter";
import { Link } from "@reach/router";

const SingleArticleCard = props => {
  const {
    title,
    body,
    created_at,
    votes,
    topic,
    author,
    comment_count,
    article_id
  } = props.article;

  return (
    <article>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h2>{title}</h2>
      <h3>Author: {author}</h3>
      <p>{body}</p>
      <h4>Topic: {topic}</h4>
      <h4>Comment Count: {comment_count}</h4>
      <h4>Published: {dateConverter(created_at)}</h4>
      <Voter votes={votes} id={article_id} type={"articles"} />
    </article>
  );
};

export default SingleArticleCard;
