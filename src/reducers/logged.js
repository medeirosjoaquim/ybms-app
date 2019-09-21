import { CHECK_LOGGED, LOG_USER_IN} from "../actions/types";

export default (state = {}, { type, data }) => {
  switch (type) {
    case CHECK_LOGGED:
      console.log('reducer',  data, type);
      return data;
    case LOG_USER_IN:
      console.log('reducer',  data, type);
      return data;
    default:
      return state;
  }
};
