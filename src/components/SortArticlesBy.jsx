import React, { Component } from "react";

class SortArticlesBy extends Component {
  state = {
    selection: ""
  };

  render() {
    return (
      <>
        <form>
          <label>
            Sort By:
            <select onChange={this.handleChange} value={this.state.selection}>
              <option></option>
              <option name="dateCreated" value="created_at">
                Published
              </option>
              <option name="commentCount" value="comment_count">
                Comments
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
