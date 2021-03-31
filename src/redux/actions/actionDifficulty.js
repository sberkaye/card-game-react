import { SET_DIFFICULTY } from "./types";

const setDifficulty = (difficulty) => {
  return { type: SET_DIFFICULTY, payload: difficulty };
};

export default { setDifficulty };
