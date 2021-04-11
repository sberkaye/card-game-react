import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
  const { theme } = props;
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(true);
  };
  let className = `card ${active ? `card-active` : ``}`;
  useEffect(() => {
    className = `card ${active ? `card-active` : ``}`;
  }, [active]);
  return (
    <div aria-hidden onClick={handleClick} className={className}>
      {console.log("className :>> ", className)}
      <div className="card__side card__side--front">
        <img src={logos[theme]} className="card__icon" alt={`${theme} icon`} />
      </div>
      <div className="card__side card__side--back">AS</div>
    </div>
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
};

export default connect(mapStateToProps)(Card);
