import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Card from "./Card";

const CardContainer = ({ difficulty }) => {
  const [rotated, setRotated] = useState([]);

  const random = Math.floor(Math.random() * (difficulty + 2));

  useEffect(() => {
    setRotated(Array.from(Array(difficulty + 2)).fill(false));
    console.log("rotated :>> ", rotated);
  }, [difficulty]);

  const generateCards = () => {
    return Array.from(Array(difficulty + 2)).map((card, index) => (
      <Card
        rotated={rotated[index]}
        unique={index === random}
        key={`card-${card}`}
      />
    ));
  };

  return <>{generateCards()}</>;
};

CardContainer.propTypes = {
  difficulty: PropTypes.number.isRequired,
};

export default CardContainer;
