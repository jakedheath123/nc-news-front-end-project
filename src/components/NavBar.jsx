import React, { Component } from "react";
import { Link } from "@reach/router";

export default class NavBar extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  render() {
    return (
      <nav className="main-nav">
        <ul>
          <Link className="link" to="/">
            <li>Home</li>
          </Link>
          <Link className="link" to="/topics/football">
            <li>Topic:Football</li>
          </Link>
          <Link className="link" to="/topics/coding">
            <li>Topic:Coding</li>
          </Link>
          <Link className="link" to="/topics/cooking">
            <li>Topic:Cooking</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
