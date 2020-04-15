import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import SearchArticleByAuthor from "./SearchArticleByAuthor";
import SortArticlesBy from "./SortArticlesBy";
import Loader from "./Loader";
import { Image1 } from "../images/image1.jpg";
import { Image2 } from "../images/image2.jpg";
import { Image3 } from "../images/image3.jpg";
import { Image4 } from "../images/image4.jpg";

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
      <>
        <SearchArticleByAuthor searchByAuthor={this.searchByAuthor} />
        <SortArticlesBy
          sortArticlesBySelection={this.sortArticlesBySelection}
        />
        <main className="top-container">
          <section className="showcase">
            <ul>
              <h2>Articles:</h2>
              {articles.map(article => {
                return (
                  <ArticleCard key={article.article_id} article={article} />
                );
              })}
            </ul>
          </section>
          <div className="top-box top-box-a">
            <img src={Image1} alt="news" />
          </div>
          <div className="top-box top-box-b">
            <img src={Image2} alt="news" />
          </div>
          <div className="top-box top-box-c">
            <img src={Image3} alt="news" />
          </div>
          <div className="top-box top-box-d">
            <img src={Image4} alt="news" />
          </div>
        </main>
      </>
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
