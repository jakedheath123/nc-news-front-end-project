import React, { Component } from "react";
import * as api from "../utils/api";
import CommentsCard from "./CommentsCard";
import PostCommentToArticle from "./PostCommentToArticle";
import Loader from "./Loader";

export default class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
    isDeleted: false
  };

  componentDidMount() {
    this.fetchSingleArticleComments();
  }

  render() {
    const { isLoading, comments, isDeleted } = this.state;
    const { username, id } = this.props;
    if (isLoading) return <Loader />;
    return (
      <section>
        <br></br>
        <h2>Comments:</h2>
        {isDeleted ? <p>Comment Successfully Deleted!</p> : null}
        <PostCommentToArticle
          article_id={id}
          addCommentToList={this.addCommentToList}
          username={username}
        />
        <hr></hr>
        {comments.map(comment => {
          const { comment_id } = comment;
          return (
            <CommentsCard
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
          isLoading: false,
          isDeleted: true
        },
        () => {
          this.props.fetchSingleArticle();
        }
      );
    });
  };
}
