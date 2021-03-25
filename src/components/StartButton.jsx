import React from "react";
import PropTypes from "prop-types";

const StartButton = ({ setAnimated }) => {
  const handleClick = () => {
    setAnimated(true);
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
};

export default StartButton;
