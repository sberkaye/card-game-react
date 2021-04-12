import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";

const CardContainer = ({ difficulty }) => {
  const random = Math.floor(Math.random(difficulty + 2));

  const generateCards = () => {
    return Array.from(Array(difficulty + 2)).map((card, index) => (
      <Card unique={index === random} key={`card-${card}`} />
    ));
  };

  return <>{generateCards()}</>;
};

CardContainer.propTypes = {
  difficulty: PropTypes.number.isRequired,
};

export default CardContainer;
