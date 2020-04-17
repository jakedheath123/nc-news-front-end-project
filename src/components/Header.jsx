import React from "react";

const Header = props => {
  return (
    <header>
      <h1>Northcoders News</h1>
      <p>Logged in as user : {props.username} </p>
    </header>
  );
};

export default Header;
