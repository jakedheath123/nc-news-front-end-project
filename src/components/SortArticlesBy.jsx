import React, { Component } from "react";

class SortArticlesBy extends Component {
  state = {
    selection: ""
  };

  handleChange = event => {
    const { value } = event.target;
    const { selection } = this.state;
    const { sortArticlesBySelection } = this.props;
    this.setState({ selection: value }, () => {
      if (selection !== "") sortArticlesBySelection(selection);
    });
  };

  render() {
    const { selection } = this.state;
    return (
      <>
        <form>
          <label>
            Sort By:
            <select onChange={this.handleChange} value={selection}>
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
