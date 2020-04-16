import React from "react";
import { List } from "semantic-ui-react";

const Footer = () => {
  return (
    <footer className="footer">
      <List>
        <List.Item>
          <List.Content>Northcoders News</List.Content>
        </List.Item>
        <List.Item>
          <List.Content>Leeds, U.K</List.Content>
        </List.Item>
      </List>
    </footer>
  );
};

export default Footer;
