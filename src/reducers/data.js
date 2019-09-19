import { RECEIVE_ARTISTINFO} from "../actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_ARTISTINFO:
      return data;

    default:
      return state;
  }
};
