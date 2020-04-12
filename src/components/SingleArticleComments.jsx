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
    return <div></div>;
  }
}
