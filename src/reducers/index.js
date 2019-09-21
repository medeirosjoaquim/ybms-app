import { combineReducers } from "redux";
import session from './session';
import logged from './logged';
import  movies  from "./movies";
import  series  from "./series";

const rootReducer = combineReducers({
  session,
  logged,
  movies,
  series
});

export default rootReducer;