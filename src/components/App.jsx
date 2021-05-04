import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

import ThemeSlider from "./ThemeSlider";
import StartButton from "./StartButton";
import CardContainer from "./CardContainer";
import DifficultyBox from "./DifficultyBox";

const App = () => {
  const [started, setStarted] = useState(false);
  const transition = useTransition(started, {
    from: { x: -500, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 500, opacity: 0 },
  });

  return (
    <>
      {transition((style, data) =>
        data ? (
          <>
            <animated.div style={style} className="section-cards">
              <CardContainer started={started} setStarted={setStarted} />
            </animated.div>
            <div className="attribution">
              Icons made by Freepik from www.flaticon.com
            </div>
          </>
        ) : (
          <animated.div style={style} className="section-main">
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
              <DifficultyBox />
              <ThemeSlider />
            </div>
            <StartButton setStarted={setStarted} />
          </animated.div>
        )
      )}
    </>
  );
};

export default App;
