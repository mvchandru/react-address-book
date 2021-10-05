import { combineReducers } from "redux";
import pageReducer from "./page/reducer";
import usersReducer from "./users/reducer";

export const reducer = combineReducers({
  page: pageReducer,
  users: usersReducer,
});
