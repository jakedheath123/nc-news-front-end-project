import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };

  handleClick = inc_votes => {
    this.setState(currentState => {
      return {
        optimisticVotes: currentState.optimisticVotes + inc_votes
      };
    });
    api.patchVotes(inc_votes, this.props.article_id, "articles");
  };

  render() {
    const { optimisticVotes } = this.state;
    return (
      <section>
        <button
          onClick={() => this.handleClick(1)}
          disabled={optimisticVotes > 0}
        >
          Like
        </button>
        <h4>Votes: {this.props.votes + optimisticVotes}</h4>
        <button
          onClick={() => this.handleClick(-1)}
          disabled={optimisticVotes < 0}
        >
          Dislike
        </button>
      </section>
    );
  }
}

export default Voter;
