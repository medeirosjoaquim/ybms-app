import { combineReducers } from "redux";

import  movies  from "./movies";
import  series  from "./series";

const rootReducer = combineReducers({
  movies,
  series
});

export default rootReducer;