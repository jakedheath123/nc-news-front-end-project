import React from "react";
import { Link } from "@reach/router";

const ArticleCard = props => {
  const { title, author, article_id } = props.article;
  return (
    <li>
      <h3>
        <Link to={`/article/${article_id}`}>{title}</Link>
      </h3>
      <h4>Author: {author}</h4>
    </li>
  );
};

export default ArticleCard;
