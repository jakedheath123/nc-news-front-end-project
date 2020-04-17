import React from "react";

const Header = props => {
  const { username } = props;
  return (
    <header>
      <h1>Northcoders News</h1>
      <p>Logged in as user : {username} </p>
    </header>
  );
};

export default Header;
