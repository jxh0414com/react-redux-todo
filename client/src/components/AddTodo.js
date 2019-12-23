import React, { Component } from "react";
// UI
import { Modal, Icon, Button, Container } from "semantic-ui-react";
// Forms
import AddTodoForm from "./AddTodoForm";

class AddTodo extends Component {
  state = {
    isOpen: false
  };

  onOpen = () => {
    this.setState({ isOpen: true });
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Modal
        closeIcon
        trigger={
          <Container style={{ marginTop: 35 }}>
            <Button onClick={this.onOpen} inverted primary>
              Add Todo
            </Button>
          </Container>
        }
        centered={false}
        size="tiny"
        open={isOpen}
        onClose={this.onClose}
      >
        <Modal.Header>
          <Icon
            style={{ width: "100%", textAlign: "relative", left: "50%" }}
            size="massive"
            name="question circle"
          />
        </Modal.Header>

        <Modal.Content>
          <Modal.Description>
            <AddTodoForm onClose={this.onClose} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default AddTodo;
