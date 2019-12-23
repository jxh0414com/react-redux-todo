// Require Todo Model
const Todo = require("../models/Todo");

// Find all todo and send to front-end else send error
exports.getTodos = (req, res) => {
  // Find
  Todo.find()
    // Sort by date
    //.sort({ createdAt: -1 })
    // Send to front-end
    .then(todo => res.json(todo))
    // Error to front-end if there is
    .catch(err => res.json(err));
};

// Add a todo to the list
exports.addTodo = (req, res) => {
  // Get the todo from the user input
  const { todo } = req.body;
  // Simple validate, cannot be empty
  if (!todo) {
    res.json({ message: "Cannot add empty Todo" });
  }
  // Create the new todo
  const newTodo = new Todo({ todo });
  // Save the new todo to the database
  newTodo
    .save()
    // Then send the new todo to the front-end
    .then(todo => res.json(todo))
    // Catch error to the front
    .catch(err => res.json(err));
};

// Delete a todo from the list
exports.deleteTodo = (req, res) => {
  // Get the id from the params
  const id = req.params.id;
  // Find if theres a todo with the id
  Todo.findById(id).then(todo => {
    // If there is no todo with the id, pass message to front-end
    if (!todo) {
      res.json({ message: `Todo ID: ${id} does not exist` });
    }
    // If there is a todo with the ID then remove
    todo
      .remove()
      // After success remove todo, send a message
      .then(() =>
        res.json({ message: `Todo ID: ${id}, ${todo.todo} has been removed` })
      )
      // Error when Removing todo
      .catch(err => res.json(err));
  });
};

// Completed a todo from the list
exports.completeTodo = (req, res) => {
  // Get the id from the params
  const id = req.params.id;
  // Find the todo with the id
  Todo.findById(id).then(todo => {
    // If there is no todo, pass a message
    if (!todo) {
      res.json({ message: `Todo ID: ${id} does not exist` });
    }
    // Else todo change from completed to true
    todo
      .update({ isCompleted: true })
      // After todo completed, send a message
      .then(() =>
        res.json({
          message: `Todo ID: ${id}, ${todo.todo} has been completed `
        })
      )
      // Error from completed
      .catch(err => res.json(err));
  });
};
