import React, { Component } from "react";
import * as api from "../utils/api";
import SingleArticleCard from "./SingleArticleCard";
import SingleArticleComments from "./SingleArticleComments";
import ViewToggler from "./ViewToggler";

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
    if (isLoading) return <p>LOADING...</p>;
    return (
      <main>
        <SingleArticleCard article={article} />
        <br></br>
        <ViewToggler>
          <SingleArticleComments article={article} />
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
