import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import picsReducer from "./picsReducer";
import difficultyReducer from "./difficultyReducer";

export default combineReducers({
  theme: themeReducer,
  pics: picsReducer,
  difficulty: difficultyReducer,
});
