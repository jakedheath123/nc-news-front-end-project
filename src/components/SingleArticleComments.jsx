import React, { Component } from "react";
import * as api from "../utils/api";
import SingleArticleCommentsCard from "./SingleArticleCommentsCard";

export default class SingleArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchSingleArticleComments();
  }

  render() {
    const { isLoading, comments } = this.state;
    if (isLoading) return <p>LOADING....</p>;
    return (
      <section>
        <h2>Comments:</h2>
        {comments.map(comment => {
          return (
            <SingleArticleCommentsCard
              key={comment.comment_id}
              comment={comment}
            />
          );
        })}
      </section>
    );
  }

  fetchSingleArticleComments = () => {
    api
      .getSingleArticleComments(this.props.article.article_id)
      .then(response => {
        this.setState({
          comments: response,
          isLoading: false
        });
      });
  };
}
