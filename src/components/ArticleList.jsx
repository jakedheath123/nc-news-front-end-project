import React, { Component } from "react";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = {
    articles: [
      {
        article_id: 33,
        author: "weegembump",
        created_at: "2018-05-30T15:59:13.341Z",
        title: "Seafood substitutions are increasing",
        topic: "cooking",
        votes: 0,
        comment_count: "6"
      },
      {
        article_id: 28,
        author: "happyamy2016",
        created_at: "2018-05-27T03:32:28.514Z",
        title: "High Altitude Cooking",
        topic: "cooking",
        votes: 0,
        comment_count: "5"
      }
    ]
  };
  render() {
    const { articles } = this.state;

    return (
      <ul>
        {articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    );
  }
}

export default ArticleList;
