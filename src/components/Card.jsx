import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Card = ({ size, active, changeActive }) => {
  const handleClick = () => {
    changeActive(true);
    console.log("clicked");
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`card card-${size} ${active ? `card--active` : ``}`}
    >
      <div className="card__side card__side--front">SA</div>
      <div className="card__side card__side--back">AS</div>
    </button>
  );
};

Card.propTypes = {
  size: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  changeActive: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    pics: state.pics.pics,
  };
};

export default connect(mapStateToProps)(Card);
