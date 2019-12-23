import React from "react";
// UI
import { Menu, Icon } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu stackable borderless size="massive">
      <Menu.Item>
        <Icon name="tasks" />
        React-Redux-Todo
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item name="github">
          <a href="https://github.com/jxh0414com/react-redux-todo">
            <Icon name="github" />
            Github
          </a>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
