import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import TopicList from "./components/TopicList";
import Footer from "./components/Footer";
import ErrorDisplay from "./components/ErrorDisplay";

export default class App extends Component {
  state = {
    username: "jessjelly"
  };
  render() {
    const { username } = this.state;
    return (
      <div className="wrapper">
        <Header username={username} />
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <SingleArticle path="/article/:article_id" username={username} />
          <TopicList path="/topics/:slug" />
          <ErrorDisplay default />
        </Router>
        <Footer />
      </div>
    );
  }
}
