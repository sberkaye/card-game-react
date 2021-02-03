import { SET_THEME } from "./types";

const selectTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};

export default { selectTheme };
