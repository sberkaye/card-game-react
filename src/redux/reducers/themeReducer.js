import { SET_THEME } from "../actions/types";

const INITIAL_STATE = {
  themes: ["animals", "flowers", "cars"],
  selectedTheme: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        selectedTheme: action.payload,
      };
    default:
      return state;
  }
};
