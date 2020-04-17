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
    const { comment } = this.state;
    const newComment = {
      username: this.props.username,
      body: comment
    };
    api.postComment(this.props.article_id, newComment).then(comment => {
      this.props.addCommentToList(comment);
    });
    this.setState({
      comment: ""
    });
  };

  render() {
    const { comment } = this.state;

    return (
      <form className="post-comment-form" onSubmit={this.handleSubmit}>
        <label>
          UserName: {this.props.username}
          {/* <input
            name="user"
            value={user}
            placeholder="Name"
            required
            onChange={this.handleChange}
          /> */}
        </label>
        <br></br>
        <label>
          Comment:
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
