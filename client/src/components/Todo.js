import React, { Component } from "react";
// Connect to redux
import { connect } from "react-redux";
import { deleteTodo, completeTodo } from "../actions/todoAction";
// UI
import { List, Popup } from "semantic-ui-react";
// Prop types
import PropTypes from "prop-types";

class Todo extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  };

  deleteTodo = id => {
    this.props.deleteTodo(id);
  };

  completeTodo = id => {
    this.props.completeTodo(id);
  };

  render() {
    const { todo } = this.props;
    const trashIcon = !todo.isCompleted ? (
      <Popup
        content="Delete your Todo"
        trigger={
          <List.Icon
            name="trash"
            size="large"
            verticalAlign="middle"
            color="red"
            onClick={() => {
              this.deleteTodo(todo._id);
            }}
            style={{ cursor: "pointer" }}
          />
        }
      />
    ) : (
      <Popup
        content="Finished Todo, but also can delete when on-click"
        trigger={
          <List.Icon
            name="checkmark"
            size="large"
            verticalAlign="middle"
            color="green"
            onClick={() => {
              this.deleteTodo(todo._id);
            }}
            style={{ cursor: "pointer" }}
          />
        }
      />
    );

    const finishIcon = !todo.isCompleted ? (
      <Popup
        content="Click to Complete Todo"
        trigger={
          <List.Icon
            name="check circle outline"
            size="large"
            verticalAlign="middle"
            color="green"
            onClick={() => {
              this.completeTodo(todo._id);
            }}
            style={{ cursor: "pointer" }}
          />
        }
      />
    ) : (
      <List.Icon
        name="check circle"
        size="large"
        verticalAlign="middle"
        color="green"
        style={{ cursor: "not-allowed" }}
      />
    );
    return (
      <List.Item>
        {trashIcon}
        <List.Content>
          <List.Header size="large">{todo.todo}</List.Header>
        </List.Content>
        {finishIcon}
      </List.Item>
    );
  }
}

export default connect(null, { deleteTodo, completeTodo })(Todo);
