import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import picsActions from "../redux/actions/actionPics";
import gameActions from "../redux/actions/actionGame";

const { getPics } = picsActions;
const { setStartedFlag } = gameActions;

const StartButton = (props) => {
  const { difficulty } = props;

  const handleClick = () => {
    props.setAnimated(true);
    props.getPics();
    console.log("difficulty :>> ", difficulty);
    setTimeout(() => {
      props.setStartedFlag(true);
    }, 4000);
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
  setAnimated: PropTypes.func.isRequired,
  getPics: PropTypes.func.isRequired,
  setStartedFlag: PropTypes.func.isRequired,
};

export default connect(null, { getPics, setStartedFlag })(StartButton);
