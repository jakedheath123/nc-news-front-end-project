import React from "react";
import { Link } from "@reach/router";

const TopicCard = props => {
  const {
    title,
    created_at,
    votes,
    author,
    comment_count,
    article_id
  } = props.article;
  return (
    <li>
      <h2 className="hvr-underline-from-center">
        <Link className="article-name-link" to={`/article/${article_id}`}>
          {title}
        </Link>
      </h2>
      <h3>Author : {author}</h3>
      <h4>Published : {created_at}</h4>
      <h4>Comments : {comment_count}</h4>
      <h4>Votes : {votes}</h4>
      <br></br>
      <hr></hr>
    </li>
  );
};

export default TopicCard;
