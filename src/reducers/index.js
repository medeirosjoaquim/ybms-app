import { combineReducers } from "redux";

import  testeDatarequest  from "./test.reducer";
import  movies  from "./movies";
import  series  from "./series";
//import  discodata  from "./discodata";
//import  datatracklist  from "./datatracklist";

const rootReducer = combineReducers({
  testeDatarequest,
  movies,
  series
  //datatracklist
});

export default rootReducer;