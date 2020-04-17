import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import SearchArticleByAuthor from "./SearchArticleByAuthor";
import SortArticlesBy from "./SortArticlesBy";
import Loader from "./Loader";
import ErrorDisplay from "./ErrorDisplay";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    searchError: null,
    sort_by: "created_at",
    author: undefined
  };

  componentDidMount() {
    this.fetchAllArticles();
  }

  render() {
    const { articles, isLoading, searchError } = this.state;
    if (isLoading) return <Loader />;
    if (searchError)
      return <ErrorDisplay status={searchError.status} msg={searchError.msg} />;
    return (
      <>
        <SearchArticleByAuthor
          searchByAuthor={this.searchByAuthor}
          resetAuthors={this.resetAuthors}
        />
        <br></br>
        <SortArticlesBy
          sortArticlesBySelection={this.sortArticlesBySelection}
        />
        <h2>Articles:</h2>
        <main className="home-container">
          <ul className="articles">
            {articles.map(article => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </ul>
        </main>
      </>
    );
  }

  searchByAuthor = author => {
    this.setState(
      {
        author
      },
      () => {
        api.getArticlesByAuthor(author).then(response => {
          this.setState({
            articles: response,
            isLoading: false
          });
        });
      }
    );
    // .catch(error => {
    //   const { msg } = error.response.data;
    //   const { status } = error.response;
    //   this.setState({
    //     searchError: {
    //       status,
    //       msg
    //     },
    //     isLoading: false
    //   });
    // });
  };

  fetchAllArticles = () => {
    api.getAllArticles().then(response => {
      this.setState({
        articles: response,
        isLoading: false
      });
    });
  };

  sortArticlesBySelection = sort_by => {
    this.setState(
      {
        sort_by
      },
      () => {
        api.sortArticles(sort_by).then(response => {
          this.setState({
            articles: response,
            isLoading: false
          });
        });
      }
    );
  };

  resetAuthors = () => {
    this.fetchAllArticles();
  };
}

export default ArticleList;
