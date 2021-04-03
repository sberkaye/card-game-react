import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";

const CardContainer = ({ difficulty = 1 }) => {
  const generateCards = (diff) => {
    return Array.from(diff).map((card) => (
      <Card size={1} key={`card-${card.toString()}`} />
    ));
  };

  return <>{generateCards(difficulty)}</>;
};

CardContainer.propTypes = {
  difficulty: PropTypes.number.isRequired,
};

export default CardContainer;
