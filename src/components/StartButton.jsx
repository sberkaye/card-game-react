import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import picsActions from "../redux/actions/actionPics";

const { getPics } = picsActions;

const StartButton = (props) => {
  const handleClick = () => {
    props.setAnimated(true);
    props.getPics();
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
  setAnimated: PropTypes.func.isRequired,
  getPics: PropTypes.func.isRequired,
};

export default connect(null, { getPics })(StartButton);
