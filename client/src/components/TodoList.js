import React, { Component } from "react";
// Connect to redux
import { connect } from "react-redux";
import { getTodos } from "../actions/todoAction";
// UI
import { Grid, List, Header } from "semantic-ui-react";
// Prop types
import PropTypes from "prop-types";
import Todo from "./Todo";

class TodoList extends Component {
  static propTypes = {
    getTodos: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const { todos } = this.props;
    const incompleteTodos = todos.filter(todo => todo.isCompleted !== true);
    const completedTodos = todos.filter(todo => todo.isCompleted === true);
    return (
      <Grid
        centered
        columns={2}
        verticalAlign="middle"
        style={{ paddingBottom: 50 }}
      >
        <Grid.Column>
          <List divided relaxed size="big">
            <Header textAlign="center" color="red">
              Incomplete
            </Header>
            {todos
              ? incompleteTodos.map(todo => <Todo todo={todo} key={todo._id} />)
              : null}

            <Header textAlign="center" color="green">
              Completed
            </Header>
            {todos
              ? completedTodos.map(todo => <Todo todo={todo} key={todo._id} />)
              : null}
          </List>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todo.todos
});

export default connect(mapStateToProps, { getTodos })(TodoList);
