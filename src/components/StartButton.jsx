import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import picsActions from "../redux/actions/actionPics";

const { getPics } = picsActions;

const StartButton = (props) => {
  const handleClick = () => {
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

// const mapStateToProps = (state) => {
//   return {
//     selectedTheme: state.theme.selectedTheme,
//   };
// };

StartButton.propTypes = {
  getPics: PropTypes.func.isRequired,
};

export default connect(null, { getPics })(StartButton);
