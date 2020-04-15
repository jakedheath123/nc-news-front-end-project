import React, { Component } from "react";

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };

  render() {
    return (
      <section>
        <button>Like</button>
        <h4>Votes: {this.props.votes}</h4>
        <button>Dislike</button>
      </section>
    );
  }
}

export default Voter;
