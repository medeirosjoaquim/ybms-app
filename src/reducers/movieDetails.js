import { RECEIVE_MOVIE_DETAILS} from "../actions/types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case RECEIVE_MOVIE_DETAILS:
      console.log('movie details reducer ', payload)
      return payload;
    default:
      return state;
  }
};
