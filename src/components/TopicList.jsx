import React, { Component } from "react";
import * as api from "../utils/api";

export default class TopicList extends Component {
  state = {
    topics: [],
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
    return <div></div>;
  }

  fetchAllArticlesByTopic = () => {
    api.getAllArticles(this.props.slug).then(response => {
      this.setState(
        {
          topics: response,
          isLoading: false
        },
        () => {
          console.log(this.state.topics);
        }
      );
    });
  };
}
