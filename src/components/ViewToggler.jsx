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
    const { isVisible } = this.state;
    const { children } = this.props;
    return (
      <>
        <button onClick={this.handleClick}>
          {isVisible ? "Hide Comments" : "Show Comments"}
        </button>
        {isVisible && children}
      </>
    );
  }
}

export default ViewToggler;
