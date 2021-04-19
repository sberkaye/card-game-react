import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Card from "./Card";

const CardContainer = ({ difficulty }) => {
  const [random, setRandom] = useState(0);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * (difficulty + 2)));
  }, [difficulty]);

  const generateCards = () => {
    return Array.from(Array(difficulty + 2)).map((card, index) => (
      <Card unique={index === random} key={uuidv4()} />
    ));
  };

  return <>{generateCards()}</>;
};

CardContainer.propTypes = {
  difficulty: PropTypes.number.isRequired,
};

export default CardContainer;
