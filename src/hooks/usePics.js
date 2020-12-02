import { useEffect, useState } from "react";

import unsplash from "../apis/unsplash";

// Return 2 random pics from Unsplash API
export default (theme) => {
  const [pics, setPics] = useState([]);

  const getPicsByTheme = async (picTheme) => {
    // Get 2 random pics with the given theme
    const response = await unsplash.get("photos/random", {
      params: {
        query: picTheme,
        count: 2,
      },
    });

    // Set the state with an array of the returned links
    setPics(response.data.map((pic) => pic.urls.regular));
  };

  // Whenever theme changes, run this method again
  useEffect(() => {
    getPicsByTheme(theme);
  }, [theme]);

  return pics;
};
