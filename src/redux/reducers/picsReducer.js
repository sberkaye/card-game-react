import { GET_PICTURES } from "../actions/types";

const INITIAL_STATE = {
  pics: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PICTURES:
      return {
        ...state,
        pics: action.payload,
      };
    default:
      return state;
  }
};
