import { GET_PICTURES } from "./types";
import unsplash from "../../apis/unsplash";

/**
 * get a number of random items form an array
 * @param {Array} arr an Array containing the items
 * @param {Number} n number of random items
 *
 * @returns {Array} an array containing the randomly selected items
 */
const getRandom = (arr, n) => {
  const result = new Array(n);
  let { length } = arr;
  const taken = new Array(length); // an array to keep track of taken indexes

  if (n > length) {
    throw new RangeError("getRandom: more elements taken than available");
  }

  // for n times
  /* eslint-disable no-plusplus, no-param-reassign */
  while (n--) {
    const x = Math.floor(Math.random() * length); // get a random index
    // if that index is already taken, get the number on the index in taken array's x index
    // if not, get the number on that index
    result[n] = arr[x in taken ? taken[x] : x];
    // put length - 1 to the x index of taken array, so that we know that the index
    // is taken, and if we ever randomly get that index again, we'll get the number
    // in the length - 1 index of the array
    taken[x] = --length in taken ? taken[length] : length;
  }

  return result;
};

/**
 * get 2 random pics from the Unsplash API and put that array into
 * the redux store
 */
const getPics = () => async (dispatch, getState) => {
  const { selectedTheme } = getState().theme;
  const response = await unsplash.get(`/search/photos`, {
    params: {
      query: selectedTheme,
    },
  });

  const randomPics = getRandom(response.data.results, 2);
  const uniqueIndex = Math.floor(Math.random() * 2);
  const regular = uniqueIndex === 0 ? 1 : 0;

  dispatch({
    type: GET_PICTURES,
    payload: { unique: randomPics[uniqueIndex], regular: randomPics[regular] },
  });
};

export default { getPics };
