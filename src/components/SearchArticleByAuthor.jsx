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

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchByAuthor(this.state.input);
    this.setState({
      input: ""
    });
  };

  render() {
    const { input } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
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
        <button>Submit</button>
      </form>
    );
  }
}
