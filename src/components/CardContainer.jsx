import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Card from "./Card";

const CardContainer = ({ difficulty }) => {
  const [active, setActive] = useState([...new Array(difficulty).fill(false)]);

  useEffect(() => {
    setActive([...new Array(difficulty).fill(false)]);
  }, [difficulty]);

  // function currying for setActive to make it easier to use
  // in the child Card component
  const changeActiveStatus = (index) => (status) => {
    setActive([...active.slice(0, index), status, ...active.slice(index + 1)]);
  };

  const generateCards = () => {
    return Array.from(Array(parseInt(difficulty, 10))).map((card, index) => (
      <Card
        active={active[index]}
        changeActive={changeActiveStatus(index)}
        size={1}
        key={`card-${card}`}
      />
    ));
  };

  return (
    <>
      {generateCards()}
      {console.log("difficulty in CardContainer :>> ", difficulty)}
      {console.log("active: ", active)}
      {console.log("active.length = ", active.length)}
    </>
  );
};

CardContainer.propTypes = {
  difficulty: PropTypes.number.isRequired,
};

export default CardContainer;
