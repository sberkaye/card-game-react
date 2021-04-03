import React, { useState } from "react";
// import usePics from "../hooks/usePics";
import ThemeSlider from "./ThemeSlider";
import StartButton from "./StartButton";
import CardContainer from "./CardContainer";
import DifficultyBox from "./DifficultyBox";

const App = () => {
  const [animated, setAnimated] = useState(false);
  const [difficulty, setDifficulty] = useState(1);

  return (
    <>
      <div className={`section-cards ${animated ? `section-cards--play` : ``}`}>
        <CardContainer difficulty={difficulty} />
      </div>
      <div className={`section-main ${animated ? `animated` : ``}`}>
        <div className="section-text">
          <h1>Find the correct card</h1>
          <h2>
            See the cards
            <br />
            memorize the different one
            <br />
            find it after the cards are shuffled
          </h2>
        </div>
        <div className="section-settings">
          <DifficultyBox
            difficulty={difficulty}
            changeDifficulty={setDifficulty}
          />
          <ThemeSlider />
        </div>
        <StartButton difficulty={difficulty} setAnimated={setAnimated} />
      </div>
    </>
  );
};

export default App;
