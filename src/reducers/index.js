import { combineReducers } from "redux";

import  data  from "./data";
import  discodata  from "./discodata";
import  datatracklist  from "./datatracklist";

const rootReducer = combineReducers({
  data,
  discodata,
  datatracklist
});

export default rootReducer;