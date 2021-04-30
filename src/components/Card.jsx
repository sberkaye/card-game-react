/* eslint-disable react/jsx-indent */
import React from "react";
import PropTypes from "prop-types";
import { animated } from "react-spring";

const Card = (props) => {
  const { style, data, length, handleClick, rotated, finished } = props;

  // --------------------  ANIMATIONS  -----------------------
  // const [frontStyle, setFrontStyle] = useSpring(() => ({
  //   transform: "",
  // }));
  // const [backStyle, setBackStyle] = useSpring(() => ({
  //   transform: "",
  // }));

  // setFrontStyle.start({ transform: rotated ? "rotateY(-180deg)" : "" });
  // setBackStyle.start({ transform: rotated ? "rotate(0)" : "" });

  // ------------------------------------------------------

  return (
    <animated.div
      className={`card ${finished ? `` : `card--not-finished`}`}
      onClick={handleClick}
      style={{ zIndex: length - data.index, ...style }}
    >
      <div
        className={`card__side card__side--front ${
          rotated ? `card__side--front--rotated` : ``
        }`}
      >
        <img src={data.pic} className="card__picture" alt={`${data.theme}`} />
      </div>
      <div
        className={`card__side card__side--back ${
          rotated ? `card__side--back--rotated` : ``
        }`}
      >
        <img
          src={data.themePic}
          className="card__icon"
          alt={`${data.theme} icon`}
        />
      </div>
    </animated.div>
  );
};

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  style: PropTypes.shape({}).isRequired,
  rotated: PropTypes.bool,
  finished: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    index: PropTypes.number,
    pic: PropTypes.string,
    theme: PropTypes.string,
    themePic: PropTypes.string,
  }).isRequired,
  length: PropTypes.number.isRequired,
};

Card.defaultProps = {
  rotated: false,
};

export default Card;
