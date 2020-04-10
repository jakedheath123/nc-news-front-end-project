import React, { Component } from "react";

export default class SearchArticleByAuthor extends Component {
  state = {
    input: ""
  };

  handleChange = event => {
    console.log(event);
  };

  render() {
    const { input } = this.state;

    return (
      <form>
        <label>
          Search By Author:
          <input
            type="text"
            name="input"
            value={input}
            placeholder="Name"
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
