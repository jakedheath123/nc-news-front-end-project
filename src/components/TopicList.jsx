import React, { Component } from "react";
import * as api from "../utils/api";
import TopicCard from "./TopicCard";
import Loader from "./Loader";
import ErrorDisplay from "./ErrorDisplay";

export default class TopicList extends Component {
  state = {
    articles: [],
    isLoading: true,
    topicError: null
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
    const { articles, isLoading, topicError } = this.state;
    if (isLoading) return <Loader />;
    if (topicError)
      return <ErrorDisplay status={topicError.status} msg={topicError.msg} />;
    return (
      <ul>
        {articles.map(article => {
          return <TopicCard key={article.article_id} article={article} />;
        })}
      </ul>
    );
  }

  fetchAllArticlesByTopic = () => {
    api
      .getAllArticles(this.props.slug)
      .then(response => {
        this.setState({
          articles: response,
          isLoading: false
        });
      })
      .catch(error => {
        const { msg } = error.response.data;
        const { status } = error.response;
        this.setState({
          topicError: {
            status,
            msg
          },
          isLoading: false
        });
      });
  };
}
