import { GET_PICTURES } from "../actions/types";

const INITIAL_STATE = {
  pics: {
    unique: {},
    regular: {},
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PICTURES:
      return {
        ...state,
        pics: {
          unique: action.payload.unique,
          regular: action.payload.regular,
        },
      };
    default:
      return state;
  }
};
