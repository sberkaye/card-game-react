import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const StartButton = (props) => {
  const { selectedTheme } = props;

  const handleClick = () => {
    console.log("selectedTheme", selectedTheme);
  };

  return (
    <div id="start-button">
      <button type="button" id="start-button__button" onClick={handleClick}>
        Start
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedTheme: state.theme.selectedTheme,
  };
};

StartButton.propTypes = {
  selectedTheme: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(StartButton);
