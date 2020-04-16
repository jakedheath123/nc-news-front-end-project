import React from "react";

const Header = props => {
  return (
    <header>
      <h1>Northcoders News</h1>
      <p>
        <i className="far fa-user"></i> {props.username}{" "}
      </p>
    </header>
  );
};

export default Header;
