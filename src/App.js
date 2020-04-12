import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <NavBar />
      <Router>
        <ArticleList path="/" />
        <SingleArticle path="/article/:article_id" />
      </Router>
    </div>
  );
}

export default App;
