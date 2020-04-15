import React, { Component } from "react";

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
  };

  render() {
    return (
      <section>
        <button onClick={() => this.handleClick(1)}>Like</button>
        <h4>Votes: {this.props.votes}</h4>
        <button onClick={() => this.handleClick(-1)}>Dislike</button>
      </section>
    );
  }
}

export default Voter;
