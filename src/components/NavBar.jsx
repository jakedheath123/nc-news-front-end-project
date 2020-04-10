import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/topics/football">
          <li>Topic:Football</li>
        </Link>
        <Link to="/topics/coding">
          <li>Topic:Coding</li>
        </Link>
        <Link to="/topics/cooking">
          <li>Topic:Cooking</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
