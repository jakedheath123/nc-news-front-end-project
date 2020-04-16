import React, { Component } from "react";
import * as api from "../utils/api";
import SingleArticleCard from "./SingleArticleCard";
import SingleArticleComments from "./SingleArticleComments";
import ViewToggler from "./ViewToggler";
import Loader from "./Loader";

export default class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    this.fetchSingleArticle();
  }

  render() {
    const { article, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main className="single-article-card">
        <SingleArticleCard article={article} />
        <br></br>
        <ViewToggler>
          <SingleArticleComments
            fetchSingleArticle={this.fetchSingleArticle}
            // article={article}
            id={this.props.article_id}
          />
        </ViewToggler>
      </main>
    );
  }

  fetchSingleArticle = () => {
    api.getSingleArticle(this.props.article_id).then(response => {
      this.setState({
        article: response,
        isLoading: false
      });
    });
  };
}
