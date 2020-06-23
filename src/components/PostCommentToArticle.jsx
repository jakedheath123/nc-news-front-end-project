import React, { Component } from "react";

import * as api from "../utils/api";

class PostCommentToArticle extends Component {
  state = {
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
    const { article_id, addCommentToList } = this.props;
    const { comment } = this.state;
    const newComment = {
      username: this.props.username,
      body: comment
    };
    api.postComment(article_id, newComment).then(comment => {
      addCommentToList(comment);
    });
    this.setState({
      comment: ""
    });
  };

  render() {
    const { comment } = this.state;

    return (
      <form className="post-comment-form" onSubmit={this.handleSubmit}>
        <label>UserName: {this.props.username}</label>
        <br></br>
        <label>
          Comment:
          <br></br>
          <textarea
            name="comment"
            value={comment}
            placeholder="Text"
            required
            onChange={this.handleChange}
          />
        </label>
        <br></br>
        <button>Submit Comment</button>
      </form>
    );
  }
}

export default PostCommentToArticle;
