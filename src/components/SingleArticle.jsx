import React, { Component } from "react";
import * as api from "../utils/api";

export default class SingleArticle extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    this.fetchSingleArticle();
  }

  render() {
    return <div></div>;
  }

  fetchSingleArticle = () => {
    api.getSingleArticle(this.props.article_id).then(response => {
      this.setState({
        article: response
      });
    });
  };
}
