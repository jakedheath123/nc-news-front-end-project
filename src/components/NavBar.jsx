import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
