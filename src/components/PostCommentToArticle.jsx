import React, { Component } from "react";

class PostCommentToArticle extends Component {
  state = {
    user: "",
    comment: ""
  };

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
          />
        </label>
        <label>
          Comment:
          <input
            name="comment"
            value={this.state.comment}
            placeholder="enter"
            required
          />
        </label>
      </form>
    );
  }
}

export default PostCommentToArticle;
