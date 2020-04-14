import React, { Component } from "react";

class PostCommentToArticle extends Component {
  state = {
    name: "",
    comment: ""
  };

  render() {
    return (
      <form>
        <label>
          UserName:
          <input />
        </label>
        <label>
          Comment:
          <input />
        </label>
      </form>
    );
  }
}

export default PostCommentToArticle;
