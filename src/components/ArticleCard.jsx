import React from "react";
import { Link } from "@reach/router";
import { dateConverter } from "../utils/utils";

const ArticleCard = props => {
  const {
    title,
    author,
    article_id,
    created_at,
    comment_count,
    votes
  } = props.article;
  return (
    <li className="single-article">
      <h3 className="hvr-underline-from-center">
        <Link className="article-name-link" to={`/article/${article_id}`}>
          {title}
        </Link>
      </h3>
      <h4>Author: {author}</h4>
      <h5>Published: {dateConverter(created_at)}</h5>
      <h5>Comments: {comment_count}</h5>
      <h5>Votes: {votes}</h5>
      <hr></hr>
    </li>
  );
};

export default ArticleCard;
