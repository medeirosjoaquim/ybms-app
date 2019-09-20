import { RECEIVE_SERIES_LIST} from "../actions/types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case RECEIVE_SERIES_LIST:
      console.log('reducer SERIES LIST',  payload, type);
      return payload.data;
    default:
      return state;
  }
};
