import { RECEIVE_SESSION_TOKEN} from "../actions/types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case RECEIVE_SESSION_TOKEN:
      console.log('reducer',  payload, type);
      return payload;
    default:
      return state;
  }
};
