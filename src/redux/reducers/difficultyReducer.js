import { SET_DIFFICULTY } from "../actions/types";

const INITIAL_STATE = {
  value: 1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DIFFICULTY:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
