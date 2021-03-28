import React from "react";

const DifficultyBox = () => {
  return (
    <div className="difficulty">
      <p>Select difficulty level:</p>
      <div className="difficulty__box">
        <button type="button" className="difficulty__box--level">
          1
        </button>
        <button type="button" className="difficulty__box--level">
          2
        </button>
        <button type="button" className="difficulty__box--level">
          3
        </button>
        <button type="button" className="difficulty__box--level">
          4
        </button>
      </div>
    </div>
  );
};

export default DifficultyBox;
