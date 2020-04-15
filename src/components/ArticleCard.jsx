import React from "react";
import { Link } from "@reach/router";

const ArticleCard = props => {
  const { title, author, article_id } = props.article;
  return (
    <li>
      <h3 className="hvr-underline-from-center">
        <Link className="article-name-link" to={`/article/${article_id}`}>
          {title}
        </Link>
      </h3>
      <h4>Author: {author}</h4>
      <hr></hr>
    </li>
  );
};

export default ArticleCard;
