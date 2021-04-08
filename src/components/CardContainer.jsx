import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";

const CardContainer = ({ difficulty }) => {
  // const [active, setActive] = useState([
  //   ...new Array(parseInt(difficulty, 10)).fill(false),
  // ]);

  // useEffect(() => {
  //   setActive([...new Array(parseInt(difficulty, 10)).fill(false)]);
  // }, [difficulty]);

  // // function currying for setActive to make it easier to use
  // // in the child Card component
  // const changeActiveStatus = (index) => (status) => {
  //   setActive([...active.slice(0, index), status, ...active.slice(index + 1)]);
  // };

  const generateCards = () => {
    return Array.from(Array(parseInt(difficulty, 10))).map((card) => (
      <Card key={`card-${card}`} />
    ));
  };

  return (
    <>
      {generateCards()}
      {console.log("render")}
    </>
  );
};

CardContainer.propTypes = {
  difficulty: PropTypes.number.isRequired,
};

export default CardContainer;
