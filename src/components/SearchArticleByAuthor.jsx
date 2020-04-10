import React, { Component } from "react";

export default class SearchArticleByAuthor extends Component {
  render() {
    return (
      <form>
        <label>
          Search By Author:
          <input type="text" placeholder="Name" />
        </label>
      </form>
    );
  }
}
