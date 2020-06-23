import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import Footer from "./components/Footer";
import ErrorDisplay from "./components/ErrorDisplay";

export default class App extends Component {
  state = {
    username: "jessjelly"
  };
  render() {
    const { username } = this.state;
    return (
      <div className="app">
        <Header username={username} />
        <NavBar />
        <Router primary={false}>
          <ArticleList path="/" />
          <ArticleList path="/topics/:slug" />
          <SingleArticle path="/article/:article_id" username={username} />
          <ErrorDisplay default status={404} msg={"Page not found"} />
        </Router>
        <Footer />
      </div>
    );
  }
}
