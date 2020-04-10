import React from "react";
import { Link } from "@reach/router";

const ArticleCard = props => {
  const { title, author, article_id } = props.article;
  return (
    <li>
      <Link to={`/article/${article_id}`}>
        <h2>{title}</h2>
      </Link>
      <h3>Author: {author}</h3>
    </li>
  );
};

export default ArticleCard;
