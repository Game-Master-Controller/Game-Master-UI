import { combineReducers } from "redux";
import { sessionReducer as session } from "redux-react-session";
import home from "./home";

export default combineReducers({
  home,
  session
});
