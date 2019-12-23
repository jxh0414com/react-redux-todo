import React, { Component, Fragment } from "react";
// Connect to redux
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import FriendlyReminder from "./components/FriendlyReminder";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Navbar />
          <AddTodo />
          <TodoList />
          <FriendlyReminder />
          <Footer />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
