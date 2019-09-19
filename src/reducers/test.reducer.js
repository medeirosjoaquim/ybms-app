import { DO_TEST_REQUEST } from "../actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case DO_TEST_REQUEST:
      return data;

    default:
      return state;
  }
};
