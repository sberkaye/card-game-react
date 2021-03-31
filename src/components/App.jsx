import React, { useState } from "react";
// import usePics from "../hooks/usePics";
import ThemeSlider from "./ThemeSlider";
import StartButton from "./StartButton";
import CardContainer from "./CardContainer";
import DifficultyBox from "./DifficultyBox";

const App = () => {
  const [animated, setAnimated] = useState(false);

  return (
    <div className={`section-main ${animated ? `animated` : ``}`}>
      <div className="section-cards">
        <CardContainer />
      </div>
      <div className="section-text">
        <h1>Find the correct card</h1>
        <h2>
          See the cards,
          <br />
          memorize the different one,
          <br />
          find it after the cards are shuffled
        </h2>
      </div>
      <div className="section-settings">
        <DifficultyBox />
        <ThemeSlider />
      </div>
      <StartButton setAnimated={setAnimated} />
    </div>
  );
};

export default App;
