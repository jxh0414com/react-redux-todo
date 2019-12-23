import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  LOADING_TODO
} from "../actions/types";

const initialState = {
  todos: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload)
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo._id === action.payload ? { ...todo, isCompleted: true } : todo
        )
      };
    case LOADING_TODO:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
