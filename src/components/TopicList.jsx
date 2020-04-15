import React, { Component } from "react";
import * as api from "../utils/api";
import TopicCard from "./TopicCard";
import Loader from "./Loader";

export default class TopicList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchAllArticlesByTopic();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.slug !== this.props.slug) {
      this.fetchAllArticlesByTopic();
    }
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <ul>
        {articles.map(article => {
          return <TopicCard key={article.article_id} article={article} />;
        })}
      </ul>
    );
  }

  fetchAllArticlesByTopic = () => {
    api.getAllArticles(this.props.slug).then(response => {
      this.setState({
        articles: response,
        isLoading: false
      });
    });
  };
}
