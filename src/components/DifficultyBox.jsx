import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import difficultyAction from "../redux/actions/actionDifficulty";

const { setDifficulty } = difficultyAction;

const DifficultyBox = (props) => {
  const { difficulty } = props;
  const handleClick = (e) => {
    props.setDifficulty(parseInt(e.target.value, 10));
  };

  // need to use array mapping while rendering buttons
  // to make all of them update their classnames with
  // each re-render
  const buttons = ["1", "2", "3", "4"];

  return (
    <div className="difficulty">
      <p>Select difficulty level:</p>
      <div className="difficulty__box">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={handleClick}
            value={btn}
            type="button"
            className={`difficulty__box__level ${
              `${difficulty}` === btn ? `difficulty__box__level--active` : ``
            }`}
          >
            {btn}
          </button>
        ))}
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
    difficulty: state.difficulty.difficulty,
  };
};

export default connect(mapStateToProps, { setDifficulty })(DifficultyBox);
