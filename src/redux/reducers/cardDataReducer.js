import { SET_CARD_DATA } from "../actions/types";

const INITIAL_STATE = {
  cards: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CARD_DATA:
      return {
        ...state,
        cards: action.payload,
      };
    default:
      return state;
  }
};
