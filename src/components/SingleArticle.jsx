import React, { Component } from "react";

import * as api from "../utils/api";
import SingleArticleCard from "./SingleArticleCard";
import Comments from "./Comments";
import ViewToggler from "./ViewToggler";
import Loader from "./Loader";
import ErrorDisplay from "./ErrorDisplay";

export default class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    articleError: null
  };

  componentDidMount() {
    this.fetchSingleArticle();
  }

  render() {
    const { article, isLoading, articleError } = this.state;
    const { article_id, username } = this.props;
    if (isLoading) return <Loader />;
    if (articleError)
      return (
        <ErrorDisplay status={articleError.status} msg={articleError.msg} />
      );
    return (
      <main className="single-article-card">
        <SingleArticleCard article={article} />
        <br></br>
        <ViewToggler>
          <Comments
            fetchSingleArticle={this.fetchSingleArticle}
            id={article_id}
            username={username}
          />
        </ViewToggler>
      </main>
    );
  }

  fetchSingleArticle = () => {
    const { article_id } = this.props;
    api
      .getSingleArticle(article_id)
      .then(response => {
        this.setState({
          article: response,
          isLoading: false
        });
      })
      .catch(error => {
        const { msg } = error.response.data;
        const { status } = error.response;
        this.setState({
          articleError: {
            status,
            msg
          },
          isLoading: false
        });
      });
  };
}
