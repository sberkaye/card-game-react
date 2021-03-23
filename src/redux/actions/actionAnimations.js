import { ANIMATE } from "./types";

const animate = (component, type) => {
  return {
    type: ANIMATE,
    payload: { component, type },
  };
};

export default { animate };
