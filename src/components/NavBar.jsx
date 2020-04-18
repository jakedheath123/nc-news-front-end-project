import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";

export default class NavBar extends Component {
  state = {
    topics: []
  };
  componentDidMount() {
    this.fetchAllTopics();
  }

  render() {
    const { topics } = this.state;

    return (
      <nav className="main-nav">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          {topics.map(topic => {
            const { slug } = topic;
            return (
              <li key={slug}>
                <Link className="link" to={`/topics/${slug}`}>
                  {slug}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  fetchAllTopics = () => {
    api.getAllTopics().then(response => {
      this.setState({
        topics: response,
        isLoading: false
      });
    });
  };
}
