import React, { Component } from "react";
import * as api from "../utils/api";
import SingleArticleCommentsCard from "./SingleArticleCommentsCard";
import PostCommentToArticle from "./PostCommentToArticle";
import Loader from "./Loader";

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
    const { username, id } = this.props;
    if (isLoading) return <Loader />;
    return (
      <section>
        <br></br>
        <h2>Comments:</h2>
        <PostCommentToArticle
          article_id={id}
          addCommentToList={this.addCommentToList}
          username={username}
        />
        <hr></hr>
        {comments.map(comment => {
          const { comment_id } = comment;
          return (
            <SingleArticleCommentsCard
              key={comment_id}
              comment={comment}
              removeCommentFromList={this.removeCommentFromList}
              username={username}
            />
          );
        })}
      </section>
    );
  }

  addCommentToList = comment => {
    this.setState(
      currentState => {
        return {
          comments: [comment, ...currentState.comments],
          isLoading: false
        };
      },
      () => {
        this.props.fetchSingleArticle();
      }
    );
  };

  fetchSingleArticleComments = () => {
    const { id } = this.props;
    api.getSingleArticleComments(id).then(response => {
      this.setState({
        comments: response,
        isLoading: false
      });
    });
  };

  removeCommentFromList = id => {
    api.deleteArticleComment(id).then(response => {
      this.setState(
        {
          comments: [
            ...this.state.comments.filter(comment => {
              return comment.comment_id !== id;
            })
          ],
          isLoading: false
        },
        () => {
          this.props.fetchSingleArticle();
        }
      );
    });
  };
}
