import React, { Component } from "react";

import * as api from "../utils/api";

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };

  handleClick = inc_votes => {
    const { id, type } = this.props;
    this.setState(currentState => {
      return {
        optimisticVotes: currentState.optimisticVotes + inc_votes
      };
    });
    api.patchVotes(inc_votes, id, type);
  };

  render() {
    const { optimisticVotes } = this.state;
    const { votes } = this.props;
    return (
      <section>
        <button
          onClick={() => this.handleClick(1)}
          disabled={optimisticVotes > 0}
        >
          Like
        </button>
        <h4>Votes: {votes + optimisticVotes}</h4>
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
