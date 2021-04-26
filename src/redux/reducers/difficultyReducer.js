import { SET_DIFFICULTY } from "../actions/types";

const INITIAL_STATE = {
  difficulty: 1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
    default:
      return state;
  }
};
