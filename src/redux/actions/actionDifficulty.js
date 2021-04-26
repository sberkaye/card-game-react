import { SET_DIFFICULTY } from "./types";

const setDifficulty = (diff) => {
  return {
    type: SET_DIFFICULTY,
    payload: diff,
  };
};

export default { setDifficulty };
