import { START_FLAG } from "../actions/types";

const INITIAL_STATE = {
  started: false,
  finished: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case START_FLAG:
      return {
        ...state,
        started: action.payload,
      };
    default:
      return state;
  }
};
