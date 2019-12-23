import React, { Component, Fragment } from "react";
// UI
import { Form, Header, Button, Icon, Message } from "semantic-ui-react";
// Connect to redux
import { connect } from "react-redux";
import { addTodo } from "../actions/todoAction";
// Prop Types
import PropTypes from "prop-types";

class AddTodoForm extends Component {
  state = {
    todo: "",
    errors: {}
  };

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validateTodo(this.state.todo);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.addTodo(this.state);
      this.props.onClose();
    }
  };

  validateTodo = todo => {
    const errors = {};
    if (!todo) {
      errors.todo = "Todo cannot be blank";
    }
    return errors;
  };

  render() {
    const { errors } = this.state;
    return (
      <Fragment>
        <Header textAlign="center">Add a new todo</Header>
        {errors.todo ? (
          <Message negative>
            <Message.Header>Something went wrong...</Message.Header>
            <Message.List>
              <Message.Item>{errors.todo}</Message.Item>
            </Message.List>
          </Message>
        ) : null}
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <Form.Input
              error={!!errors.todo}
              name="todo"
              icon="tasks"
              iconPosition="left"
              placeholder="New Todo"
              onChange={this.onChange}
            />
          </Form.Field>

          <Form.Field style={{ float: "right", padding: "25px" }}>
            <Button
              color="red"
              inverted
              type="button"
              onClick={this.props.onClose}
            >
              <Icon name="remove" /> Cancel
            </Button>

            <Button color="green" inverted type="submit">
              <Icon name="checkmark" /> Add
            </Button>
          </Form.Field>
        </Form>
      </Fragment>
    );
  }
}

export default connect(null, { addTodo })(AddTodoForm);
