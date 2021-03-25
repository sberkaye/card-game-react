import React, { useState, useEffect } from "react";
// import usePics from "../hooks/usePics";
import ThemeSlider from "./ThemeSlider";
import StartButton from "./StartButton";

const App = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    console.log(`animated: ${animated}`);
  });

  return (
    <div className={`section-main ${animated ? `animated` : ``}`}>
      <h1>Find the correct card</h1>
      <h2>
        See the cards,
        <br />
        memorize the different one,
        <br />
        find it after the cards are shuffled
      </h2>
      <ThemeSlider />
      <StartButton setAnimated={setAnimated} />
    </div>
  );
};

export default App;
