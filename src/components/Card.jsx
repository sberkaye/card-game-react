import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className={`card card-${props.size}`}>
      <div className="card__side card__side--front">SA</div>
      <div className="card__side card__side--back">AS</div>
    </div>
  );
};

Card.propTypes = {
  size: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    pics: state.pics.pics,
  };
};

export default connect(mapStateToProps)(Card);
