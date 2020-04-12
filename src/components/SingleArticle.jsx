import React, { Component } from "react";
import * as api from "../utils/api";
import SingleArticleCard from "./SingleArticleCard";
import SingleArticleComments from "./SingleArticleComments";

export default class SingleArticle extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    this.fetchSingleArticle();
  }

  render() {
    const { article } = this.state;
    return (
      <main>
        <SingleArticleCard article={article} />
        <SingleArticleComments article={article} />
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
