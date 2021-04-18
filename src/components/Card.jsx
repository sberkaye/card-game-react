/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import animals from "../img/animals.svg";
import flowers from "../img/flowers.svg";
import cars from "../img/cars.svg";
import sports from "../img/sports.svg";

const logos = {
  animals,
  flowers,
  cars,
  sports,
};

const Card = (props) => {
  const { theme, pics, unique } = props;
  const [rotated, setRotated] = useState(false);

  // --------------------  ANIMATIONS  -----------------------
  const frontStyle = useSpring({
    transform: rotated ? "rotateY(-180deg)" : "",
  });
  const backStyle = useSpring({
    transform: rotated ? "rotateY(0)" : "",
  });
  // ------------------------------------------------------
  const handleClick = () => {
    setRotated(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setRotated(true);
      console.log("sa");
    }, 5000);
  }, []);

  return (
    <animated.div aria-hidden onClick={handleClick} className="card">
      <animated.div className="card__side card__side--front" style={frontStyle}>
        {Object.keys(pics.unique).length && (
          <img
            src={unique ? pics.unique.urls.small : pics.regular.urls.small}
            className="card__picture"
            alt={`${theme}`}
          />
        )}
      </animated.div>
      <animated.div className="card__side card__side--back" style={backStyle}>
        <img src={logos[theme]} className="card__icon" alt={`${theme} icon`} />
      </animated.div>
    </animated.div>
  );
};

const mapStateToProps = (state) => {
  return {
    pics: state.pics.pics,
    theme: state.theme.selectedTheme,
  };
};

Card.propTypes = {
  theme: PropTypes.string.isRequired,
  pics: PropTypes.arrayOf(PropTypes.string).isRequired,
  unique: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Card);
