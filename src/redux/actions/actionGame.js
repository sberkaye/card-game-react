import { START_FLAG } from "./types";

const setStartedFlag = (started) => {
  return {
    type: START_FLAG,
    payload: started,
  };
};

export default { setStartedFlag };
