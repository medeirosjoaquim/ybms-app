import { RECEIVE_DISCOGRAPHY } from "../actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_DISCOGRAPHY:
      return data;
    default:
      return state;
  }
};
