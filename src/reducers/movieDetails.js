import { RECEIVE_MOVIE_DETAILS} from "../actions/types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case RECEIVE_MOVIE_DETAILS:
      return {payload};
    default:
      return state;
  }
};
