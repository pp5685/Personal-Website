import { combineReducers } from "redux";
import jobReducer from "./jobReducer";
import commentReducer from "./commentReducer";
export default combineReducers({
  jobs: jobReducer,
  comments: commentReducer,
});
