import React from "react";

// import usePics from "../hooks/usePics";
import ThemeSlider from "./ThemeSlider";

const App = () => {
  return (
    <>
      <h1>Find the correct card</h1>
      <h2>
        See the cards,
        <br />
        memorize the different one,
        <br />
        find it after the cards are shuffled
      </h2>
      <ThemeSlider />
    </>
  );
};

export default App;
