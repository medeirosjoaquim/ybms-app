import { RECEIVE_MOVIES_LIST} from "../actions/types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case RECEIVE_MOVIES_LIST:
      return payload.data;
    default:
      return state;
  }
};
