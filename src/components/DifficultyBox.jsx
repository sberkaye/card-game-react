import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";

import difficultyActions from "../redux/actions/actionDifficulty";

const { setDifficulty } = difficultyActions;

const DifficultyBox = (props) => {
  const { difficulty } = props;

  const handleClick = (e) => {
    props.setDifficulty(e.target.value);
    console.log("e.target.value :>> ", e.target.value);
  };

  useEffect(() => {
    console.log("difficulty :>> ", difficulty);
  }, [difficulty]);

  return (
    <div className="difficulty">
      {console.log("difficulty in render: ", difficulty)}
      <p>Select difficulty level:</p>
      <span>{difficulty}</span>
      <div className="difficulty__box">
        <button
          type="button"
          value={1}
          onClick={handleClick}
          className={clsx(
            "difficulty__box--level",
            difficulty === 1 && "active"
          )}
        >
          1
        </button>
        <button
          type="button"
          value={2}
          onClick={handleClick}
          className={clsx(
            "difficulty__box--level",
            difficulty === 2 && "active"
          )}
        >
          2
        </button>
        <button
          type="button"
          value={3}
          onClick={handleClick}
          className={clsx(
            "difficulty__box--level",
            difficulty === 3 && "active"
          )}
        >
          3
        </button>
        <button
          type="button"
          value={4}
          onClick={handleClick}
          className={clsx(
            "difficulty__box--level",
            difficulty === 4 && "active"
          )}
        >
          4
        </button>
      </div>
    </div>
  );
};

DifficultyBox.propTypes = {
  difficulty: PropTypes.number.isRequired,
  setDifficulty: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    difficulty: state.difficulty.value,
  };
};

export default connect(mapStateToProps, { setDifficulty })(DifficultyBox);
