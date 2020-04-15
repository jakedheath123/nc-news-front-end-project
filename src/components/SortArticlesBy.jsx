import React, { Component } from "react";

class SortArticlesBy extends Component {
  state = {
    selection: ""
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ selection: value }, () => {
      if (this.state.selection !== "")
        this.props.sortArticlesBySelection(this.state.selection);
    });
  };

  render() {
    return (
      <>
        <form className="sort-by">
          <label>
            Sort By:
            <select onChange={this.handleChange} value={this.state.selection}>
              <option></option>
              <option name="dateCreated" value="created_at">
                Date Published
              </option>
              <option name="commentCount" value="comment_count">
                Comment Count
              </option>
              <option name="votes" value="votes">
                Votes
              </option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

export default SortArticlesBy;
