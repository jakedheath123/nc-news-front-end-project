import React, { Component } from "react";
import * as api from "../utils/api";

class PostCommentToArticle extends Component {
  state = {
    user: "",
    comment: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { user, comment } = this.state;
    const newComment = {
      username: user,
      body: comment
    };
    api.postComment(this.props.article_id, newComment).then(comment => {
      this.props.addCommentToList(comment);
    });
    this.setState({
      user: "",
      comment: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          UserName:
          <input
            name="user"
            value={this.state.user}
            placeholder="enter"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Comment:
          <input
            name="comment"
            value={this.state.comment}
            placeholder="enter"
            required
            onChange={this.handleChange}
          />
        </label>
        <button>Submit Comment</button>
      </form>
    );
  }
}

export default PostCommentToArticle;
