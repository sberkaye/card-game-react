import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import picsReducer from "./picsReducer";

export default combineReducers({
  theme: themeReducer,
  pics: picsReducer,
});
