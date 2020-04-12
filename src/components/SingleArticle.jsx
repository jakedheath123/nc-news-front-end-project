import React, { Component } from "react";
import * as api from "../utils/api";
import SingleArticleCard from "./SingleArticleCard";

export default class SingleArticle extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    this.fetchSingleArticle();
  }

  render() {
    return (
      <main>
        <SingleArticleCard />
      </main>
    );
  }

  fetchSingleArticle = () => {
    api.getSingleArticle(this.props.article_id).then(response => {
      this.setState({
        article: response
      });
    });
  };
}
