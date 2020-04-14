import React, { Component } from "react";
import * as api from "../utils/api";

export default class SingleArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchSingleArticleComments();
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) return <p>LOADING....</p>;
    return <div></div>;
  }

  fetchSingleArticleComments = () => {
    api
      .getSingleArticleComments(this.props.article.article_id)
      .then(response => {
        this.setState({
          comments: response,
          isLoading: false
        });
      });
  };
}
