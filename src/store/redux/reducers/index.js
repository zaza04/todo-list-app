import { combineReducers } from "redux";
import TodoReducer from "./todoReducer";

const allReducer = combineReducers({
  TodoReducer,
});

export default allReducer;
