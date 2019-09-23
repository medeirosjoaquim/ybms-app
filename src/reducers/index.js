import { combineReducers } from "redux";

import  movies  from "./movies";
import  movieDetails  from "./movieDetails";
import  series  from "./series";

const rootReducer = combineReducers({
  movieDetails,
  movies,
  series
});

export default rootReducer;