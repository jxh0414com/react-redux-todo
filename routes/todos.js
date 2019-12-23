const router = require("express").Router();
// functions for the end point
const {
  getTodos,
  addTodo,
  deleteTodo,
  completeTodo
} = require("../controllers/todoController");

// Get all todo
router.get("/", getTodos);
// Add a new todo
router.post("/", addTodo);
// Delete a todo
router.delete("/:id", deleteTodo);
// Complete a todo
router.post("/:id", completeTodo);

module.exports = router;
