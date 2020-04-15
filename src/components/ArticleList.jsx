import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import SearchArticleByAuthor from "./SearchArticleByAuthor";
import SortArticlesBy from "./SortArticlesBy";
import Loader from "./Loader";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    selection: ""
  };

  componentDidMount() {
    this.fetchAllArticles();
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main className="top-container">
        <section>
          <SearchArticleByAuthor searchByAuthor={this.searchByAuthor} />
          <SortArticlesBy
            sortArticlesBySelection={this.sortArticlesBySelection}
          />
          <ul>
            <h2>Articles:</h2>
            {articles.map(article => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </ul>
        </section>
      </main>
    );
  }

  searchByAuthor = author => {
    api.getArticleByAuthor(author).then(response => {
      this.setState({
        articles: response,
        isLoading: false
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

  sortArticlesBySelection = selection => {
    this.setState({
      selection
    });
    api.getAllArticles(this.state.selection);
    // api.getAllArticles(selection).then(response => {
    //   this.setState({
    //     articles: response,
    //     isLoading: false
    //   });
    // });
  };
}

export default ArticleList;
