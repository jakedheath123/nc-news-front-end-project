import React, { Component } from "react";
import * as api from "../utils/api";

export default class SingleArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    api.getSingleArticleComments(this.props.article.article_id);
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) return <p>LOADING....</p>;
    return <div></div>;
  }
}
