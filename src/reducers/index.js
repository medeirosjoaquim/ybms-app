import { combineReducers } from "redux";
import isLogged from './logged'
import  movies  from "./movies";
import  series  from "./series";

const rootReducer = combineReducers({
  isLogged,
  movies,
  series
});

export default rootReducer;