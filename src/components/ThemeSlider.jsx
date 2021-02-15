import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import themeActions from "../redux/actions/actionTheme";

const { selectTheme } = themeActions;

// Get different themes, put them into a carousel and render it
const ThemeSlider = (props) => {
  const [currIndex, setCurrIndex] = useState(0);

  const { themes } = props;

  useEffect(() => {
    // need to use this here, because the setter returned
    // by the useState hook is asynchronous and doesn't update
    // the state immediately. So, my solution is to update the theme
    // with each re-render.
    props.selectTheme(themes[currIndex]);
  });

  const prevIndex = () => {
    // if the current index is the first index
    // go to the last index
    if (!currIndex) {
      setCurrIndex(themes.length - 1);
      return;
    }
    setCurrIndex(currIndex - 1);
  };

  const nextIndex = () => {
    // if the current index is the last index
    // go back to the first index
    if (currIndex === themes.length - 1) {
      setCurrIndex(0);
      return;
    }
    setCurrIndex(currIndex + 1);
  };

  return (
    <>
      <span className="span-theme">Select a theme:</span>
      <div className="theme-carousel">
        <button
          className="theme-carousel__button theme-carousel__button--left"
          type="button"
          onClick={prevIndex}
        >
          &#10148;
        </button>
        <div className="theme-carousel__content">{themes[currIndex]}</div>
        <button
          href="#"
          className="theme-carousel__button theme-carousel__button--right"
          type="button"
          onClick={nextIndex}
        >
          &#10148;
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    themes: state.theme.themes,
    selectedTheme: state.theme.selectedTheme,
  };
};

ThemeSlider.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectTheme: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { selectTheme })(ThemeSlider);
