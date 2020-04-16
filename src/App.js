import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import TopicList from "./components/TopicList";
import Footer from "./components/Footer";

export default class App extends Component {
  state = {
    username: "jessjelly"
  };
  render() {
    return (
      <div className="wrapper">
        <Header username={this.state.username} />
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <SingleArticle
            path="/article/:article_id"
            username={this.state.username}
          />
          <TopicList path="/topics/:slug" />
        </Router>
        <Footer />
      </div>
    );
  }
}
