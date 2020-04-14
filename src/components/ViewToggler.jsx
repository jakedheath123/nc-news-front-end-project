import React, { Component } from "react";

class ViewToggler extends Component {
  state = {
    isVisible: false
  };

  handleClick = () => {
    this.setState(currentState => {
      return { isVisible: !currentState.isVisible };
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.isVisible ? "Hide Comments" : "Show Comments"}
        </button>
        {this.state.isVisible && this.props.children}
      </>
    );
  }
}

export default ViewToggler;
