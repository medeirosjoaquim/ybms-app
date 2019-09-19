import { RECEIVE_TRACKLIST} from "../actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_TRACKLIST:
      return data;

    default:
      return state;
  }
};
