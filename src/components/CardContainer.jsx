/* eslint-disable no-return-assign */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useSprings, animated } from "react-spring";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import cardDataActions from "../redux/actions/actionCardData";

const { setCardData } = cardDataActions;

/**
 * A helper function to make using state setters for Array states easier to use
 * @param {Array} arr
 * @param {Number} index
 * @param {*} val
 * @returns new array with the value inserted into the specified index
 */
// const insertIntoIndex = (arr, index, val) => {
//   return [...arr.slice(0, index), val, ...arr.slice(index)];
// };

const CardContainer = (props) => {
  const { started, cards } = props;
  const frontSprings = useSprings(
    cards.length,
    cards.map((card) => ({
      transform: card.rotated ? "rotateY(-180deg)" : "rotateY(0)",
    }))
  );
  const backSprings = useSprings(
    cards.length,
    cards.map((card) => ({
      transform: card.rotated ? "rotateY(0)" : "rotateY(180deg)",
    }))
  );

  const handleClick = (index) => () => {
    const newCards = cards.map((card, cardIndex) =>
      index === cardIndex ? { ...card, rotated: false } : { ...card }
    );
    props.setCardData(newCards);
  };

  // rotate each card 5 seconds after the start
  useEffect(() => {
    setTimeout(() => {
      const rotatedCards = cards.map((card) => ({ ...card, rotated: true }));
      props.setCardData(rotatedCards);
    }, 5000);
  }, [started]);

  return (
    <>
      {cards.map((card, cardIndex) => (
        <animated.div
          aria-hidden
          onClick={handleClick(cardIndex)}
          className="card"
          key={uuidv4()}
        >
          <animated.div
            className="card__side card__side--front"
            style={frontSprings[cardIndex]}
          >
            <img
              src={card.pic}
              className="card__picture"
              alt={`${card.theme}`}
            />
          </animated.div>
          <animated.div
            className="card__side card__side--back"
            style={backSprings[cardIndex]}
          >
            <img
              src={card.themePic}
              className="card__icon"
              alt={`${card.theme} icon`}
            />
          </animated.div>
        </animated.div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cardData.cards,
    difficulty: state.difficulty.difficulty,
  };
};

CardContainer.propTypes = {
  // difficulty: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      theme: PropTypes.string,
      unique: PropTypes.bool,
      pic: PropTypes.string,
      themePic: PropTypes.string,
      rotated: PropTypes.bool,
    })
  ).isRequired,
  started: PropTypes.bool.isRequired,
  setCardData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { setCardData })(CardContainer);
