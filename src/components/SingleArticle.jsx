import React, { Component } from "react";

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

  fetchSingleArticle = () => {};
}
