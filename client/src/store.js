import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import indexReducer from "./reducers/indexReducer";

const middleware = [thunk];

const store = createStore(
  indexReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
