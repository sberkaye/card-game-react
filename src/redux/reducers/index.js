import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import difficultyReducer from "./difficultyReducer";
import cardDataReducer from "./cardDataReducer";

export default combineReducers({
  theme: themeReducer,
  difficulty: difficultyReducer,
  cardData: cardDataReducer,
});
