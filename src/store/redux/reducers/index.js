import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";

const allReducer = combineReducers({
  TodoReducer,
});
export default allReducer;
