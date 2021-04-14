import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import picsReducer from "./picsReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
  theme: themeReducer,
  pics: picsReducer,
  game: gameReducer,
});
