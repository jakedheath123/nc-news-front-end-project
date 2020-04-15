import React, { Component } from "react";

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };

  handleClick = () => {};

  render() {
    return (
      <section>
        <button onClick={this.handleClick}>Like</button>
        <h4>Votes: {this.props.votes}</h4>
        <button onClick={this.handleClick}>Dislike</button>
      </section>
    );
  }
}

export default Voter;
