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
          <Link className="link" to="/">
            <li>Home</li>
          </Link>
          {topics.map(topic => {
            return (
              <Link
                key={topic.slug}
                className="link"
                to={`/topics/${topic.slug}`}
              >
                <li>Topic: {topic.slug}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
    );
  }

  fetchAllTopics = () => {
    api.getAllTopics().then(response => {
      this.setState({
        topics: response
      });
    });
  };
}
