import React, { Component } from "react";

export default class SearchArticleByAuthor extends Component {
  state = {
    input: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
