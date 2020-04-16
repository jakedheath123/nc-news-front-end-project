import React, { Component } from "react";
import * as api from "../utils/api";
import SingleArticleCard from "./SingleArticleCard";
import SingleArticleComments from "./SingleArticleComments";
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
          <SingleArticleComments
            fetchSingleArticle={this.fetchSingleArticle}
            id={this.props.article_id}
            username={this.props.username}
          />
        </ViewToggler>
      </main>
    );
  }

  fetchSingleArticle = () => {
    api
      .getSingleArticle(this.props.article_id)
      .then(response => {
        this.setState({
          article: response,
          isLoading: false
        });
      })
      .catch(error => {
        console.dir(error);
        const { status, msg } = error.response.data;
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
