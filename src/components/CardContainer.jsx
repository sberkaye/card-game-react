/* eslint-disable no-return-assign */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useSprings, animated } from "react-spring";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

/**
 * A helper function to make using state setters for Array states easier to use
 * @param {Array} arr
 * @param {Number} index
 * @param {*} val
 * @returns new array with the value inserted into the specified index
 */
const insertIntoIndex = (arr, index, val) => {
  return [...arr.slice(0, index), val, ...arr.slice(index + 1)];
};

const CardContainer = (props) => {
  const { difficulty, started, cards } = props;
  const [rotated, setRotated] = useState(new Array(difficulty + 2).fill(false));
  console.log(`cards`, cards);
  const frontSprings = useSprings(
    cards.length,
    cards.map((card, index) => ({
      transform: rotated[index] ? "rotateY(-180deg)" : "",
    }))
  );
  const backSprings = useSprings(
    cards.length,
    cards.map((card, index) => ({
      transform: rotated[index] ? "rotateY(0)" : "",
    }))
  );

  const handleClick = (index) => () => {
    setRotated(insertIntoIndex(rotated, index, true));
  };

  useEffect(() => {
    setTimeout(() => {
      setRotated((prev) =>
        prev.map((rotation) => {
          return !rotation;
        })
      );
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
            )
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
  difficulty: PropTypes.number.isRequired,
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
};

export default connect(mapStateToProps)(CardContainer);
