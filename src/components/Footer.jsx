import React from "react";
import { List } from "semantic-ui-react";

const Footer = () => {
  return (
    <footer>
      <List>
        <List.Item>
          <List.Icon name="users" />
          <List.Content>Northcoders News</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>Leeds, U.K</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="mailto:news@news.com">ncnews@nc.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="www.nc.com">northcoders-news.com</a>
          </List.Content>
        </List.Item>
      </List>
    </footer>
  );
};

export default Footer;
