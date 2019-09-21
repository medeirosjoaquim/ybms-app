import { CHECK_LOGGED} from "../actions/types";

export default (state = {}, { type, data }) => {
  switch (type) {
    case CHECK_LOGGED:
      console.log('reducer',  data, type);
      return data;
    default:
      return state;
  }
};
