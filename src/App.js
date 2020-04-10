import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Router>
        <ArticleList path="/" />
      </Router>
    </div>
  );
}

export default App;
