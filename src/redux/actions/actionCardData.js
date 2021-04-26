import { SET_CARD_DATA } from "./types";

const setCardData = (data) => {
  return {
    type: SET_CARD_DATA,
    payload: data,
  };
};

export default { setCardData };
