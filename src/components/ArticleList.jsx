import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import SearchArticleByAuthor from "./SearchArticleByAuthor";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchAllArticles();
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>LOADING...</p>;
    return (
      <>
        <SearchArticleByAuthor searchByAuthor={this.searchByAuthor} />
        <ul>
          <h2>Articles:</h2>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </>
    );
  }

  searchByAuthor = author => {
    api.getArticleByAuthor(author).then(response => {
      this.setState({
        articles: response
      });
    });
  };

  fetchAllArticles = () => {
    api.getAllArticles().then(response => {
      this.setState({
        articles: response,
        isLoading: false
      });
    });
  };
}

export default ArticleList;
