import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import picsActions from "../redux/actions/actionPics";

const { getPics } = picsActions;

const StartButton = (props) => {
  const { difficulty, setStarted } = props;

  const handleClick = () => {
    props.getPics();
    console.log("difficulty :>> ", difficulty);
    setStarted(true);
  };

  return (
    <div id="start-button">
      <button type="button" id="start-button__button" onClick={handleClick}>
        Start
      </button>
    </div>
  );
};

StartButton.propTypes = {
  difficulty: PropTypes.number.isRequired,
  getPics: PropTypes.func.isRequired,
  // setStartedFlag: PropTypes.func.isRequired,
  setStarted: PropTypes.func.isRequired,
};

export default connect(null, { getPics })(StartButton);
