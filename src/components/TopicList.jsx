import React, { Component } from "react";
import * as api from "../utils/api";

export default class TopicList extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    api.getAllArticles();
  }

  render() {
    return <div></div>;
  }
}
