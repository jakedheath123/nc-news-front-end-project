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
  render() {
    return (
      <div className="wrapper">
        <Header />
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <SingleArticle path="/article/:article_id" />
          <TopicList path="/topics/:slug" />
        </Router>
        <Footer />
      </div>
    );
  }
}
