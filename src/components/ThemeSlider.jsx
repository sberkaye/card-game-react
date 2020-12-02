import React from "react";

// Get different themes, put them into a carousel and render it
const ThemeSlider = () => {
  return (
    <>
      <span className="span-theme">Select a theme:</span>
      <div className="theme-carousel">
        <button
          className="theme-carousel__button theme-carousel__button--left"
          type="button"
        >
          &#10148;
        </button>
        <div className="theme-carousel__content">Animals</div>
        <button
          href="#"
          className="theme-carousel__button theme-carousel__button--right"
          type="button"
        >
          &#10148;
        </button>
      </div>
    </>
  );
};

export default ThemeSlider;
