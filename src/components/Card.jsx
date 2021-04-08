import React, { useState } from "react";
import { connect } from "react-redux";

const Card = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(true);
  };
  const className = `card ${active ? `card--active` : ``}`;
  return (
    <button type="button" onClick={handleClick} className={className}>
      <div className="card__side card__side--front">SA</div>
      <div className="card__side card__side--back">AS</div>
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    pics: state.pics.pics,
  };
};

export default connect(mapStateToProps)(Card);
