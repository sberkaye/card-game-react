import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import ThemeSlider from "./ThemeSlider";
import StartButton from "./StartButton";
import CardContainer from "./CardContainer";
import DifficultyBox from "./DifficultyBox";

const App = () => {
  const [difficulty, setDifficulty] = useState(1);
  const [started, setStarted] = useState(false);
  // const [finished, setFinished] = useState(false);
  // ------------------------------------- ANIMATIONS -------------------------------------
  const containerStyle = useSpring({
    transform: started ? "translate3d(0px, 0, 0)" : "translate3d(-500px, 0, 0)",
    opacity: started ? 1 : 0,
    delay: 1000,
    config: {
      friction: 50,
    },
  });
  const mainStyle = useSpring({
    transform: started ? "translate3d(5000px, 0, 0)" : "translate3d(0, 0, 0)",
    opacity: started ? 0 : 1,
  });
  // -----------------------------------------------------------------------------------
  return (
    <>
      <animated.div style={containerStyle} className="section-cards">
        <CardContainer difficulty={difficulty} />
      </animated.div>
      <animated.div style={mainStyle} className="section-main">
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
        <StartButton difficulty={difficulty} setStarted={setStarted} />
      </animated.div>
    </>
  );
};

export default App;
