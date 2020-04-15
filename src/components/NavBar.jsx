import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import Loader from "./Loader";

export default class NavBar extends Component {
  state = {
    topics: [],
    isLoading: true
  };
  componentDidMount() {
    this.fetchAllTopics();
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          {topics.map(topic => {
            return (
              <li key={topic.slug}>
                <Link className="link" to={`/topics/${topic.slug}`}>
                  Topic: {topic.slug}
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
        topics: response
      });
    });
  };
}
