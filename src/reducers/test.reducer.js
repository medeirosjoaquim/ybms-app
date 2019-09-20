import { DO_RECEIVE_TEST} from "../actions/types";

export default (state = {}, { type, data }) => {
  switch (type) {
    case DO_RECEIVE_TEST:
      console.log('reducer',  data, type);
      return data;
    default:
      return state;
  }
};
