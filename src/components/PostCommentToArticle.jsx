import React, { Component } from "react";

class PostCommentToArticle extends Component {
  state = {
    user: "",
    comment: ""
  };

  handleChange = event => {};

  render() {
    return (
      <form>
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
