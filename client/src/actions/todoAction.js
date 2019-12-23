import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  LOADING_TODO
} from "./types";
import axios from "axios";

// Get all todos
export const getTodos = () => dispatch => {
  // Set loading to true
  dispatch({ type: LOADING_TODO });
  // Call get all todos end point
  axios.get("/api/todos").then(res =>
    // After the get request, there will be a promise.
    // call GET TODOS reducer type and send the data to the front-end
    dispatch({
      type: GET_TODOS,
      payload: res.data
    })
  );
};

// Add a todo
export const addTodo = data => dispatch => {
  // Call add todo end point
  axios.post("/api/todos", data).then(res =>
    // After the post request, there will be a promise.
    // call ADD TODO reducer type and send the new todo to the front-end
    dispatch({
      type: ADD_TODO,
      payload: res.data
    })
  );
};

// Delete a todo
export const deleteTodo = id => dispatch => {
  // Call delete todo end point
  axios.delete(`/api/todos/${id}`).then(res =>
    // After the delete request, there will be a promise.
    // call DELETE TODO reducer type and send the id to the front-end
    // So the front-end can filter it
    dispatch({
      type: DELETE_TODO,
      payload: id
    })
  );
};

// Complete a todo
export const completeTodo = id => dispatch => {
  // Call complete todo end point
  axios.post(`/api/todos/${id}`).then(res =>
    // After the post request, there will be a promise.
    // call COMPLETE TODO reducer type and send the id to the front-end
    // So the front-end change the listing
    dispatch({
      type: COMPLETE_TODO,
      payload: id
    })
  );
};
