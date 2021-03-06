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
    const { searchByAuthor } = this.props;
    const { input } = this.state;
    searchByAuthor(input);
    this.setState({
      input: ""
    });
  };

  render() {
    const { input } = this.state;

    return (
      <>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <label>
            Search By Author:
            <input
              type="text"
              name="input"
              value={input}
              placeholder="Name"
              onChange={this.handleChange}
              required
            />
          </label>
          <br></br>
          <button>Submit</button>
          <button type="reset" onClick={() => this.props.resetAuthors()}>
            Reset
          </button>
        </form>
      </>
    );
  }
}
