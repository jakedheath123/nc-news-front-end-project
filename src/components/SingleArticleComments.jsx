import React, { Component } from "react";
import * as api from "../utils/api";
import SingleArticleCommentsCard from "./SingleArticleCommentsCard";
import PostCommentToArticle from "./PostCommentToArticle";

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
      <section className="comments">
        <h2>Comments:</h2>
        <PostCommentToArticle
          article_id={this.props.article.article_id}
          addCommentToList={this.addCommentToList}
        />
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

  addCommentToList = () => {};

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
