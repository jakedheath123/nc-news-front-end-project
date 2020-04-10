import React from "react";

const ArticleCard = props => {
  const { title, author } = props.article;
  return (
    <li>
      <h2>{title}</h2>
      <h3>{author}</h3>
    </li>
  );
};

export default ArticleCard;
