import { DO_RECEIVE_TEST} from "../actions/types";

export default (state = {}, { type, data }) => {
  switch (type) {
    case DO_RECEIVE_TEST:
      return data;
    default:
      return state;
  }
};
