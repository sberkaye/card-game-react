import { GET_PICTURES } from "./types";
import unsplash from "../../apis/unsplash";

// get random pics with the selected theme from Unsplash API
const getPics = () => async (dispatch, getState) => {
  const { selectedTheme } = getState().theme;
  const response = await unsplash.get(`/search/photos`, {
    params: {
      query: selectedTheme,
    },
  });

  console.log("response: ", response);

  dispatch({ type: GET_PICTURES, payload: response.data.results });
};

export default { getPics };
