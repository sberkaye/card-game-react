import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";

const CardContainer = ({ difficulty }) => {
  const generateCards = () => {
    return Array.from(Array(parseInt(difficulty, 10))).map((card) => (
      <Card size={1} key={`card-${card}`} />
    ));
  };

  return <>{generateCards()}</>;
};

CardContainer.propTypes = {
  difficulty: PropTypes.number.isRequired,
};

export default CardContainer;
