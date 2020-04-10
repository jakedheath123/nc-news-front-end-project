import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import SearchArticleByAuthor from "./SearchArticleByAuthor";

class ArticleList extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.fetchAllArticles();
  }

  render() {
    const { articles } = this.state;

    return (
      <>
        <SearchArticleByAuthor />
        <ul>
          <h2>Articles:</h2>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </>
    );
  }

  fetchAllArticles = () => {
    api.getAllArticles().then(response => {
      this.setState({
        articles: response
      });
    });
  };
}

export default ArticleList;
