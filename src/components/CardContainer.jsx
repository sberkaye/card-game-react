/* eslint-disable no-return-assign */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useTransition } from "react-spring";
import PropTypes from "prop-types";
import { shuffle } from "lodash";
import Card from "./Card";

import cardDataActions from "../redux/actions/actionCardData";

const { setCardData } = cardDataActions;

const CardContainer = (props) => {
  const { started, cards, difficulty } = props;
  const [count, setCount] = useState(0);
  const [rotated, setRotated] = useState(new Array(difficulty + 2).fill(false));

  const shuffleCards = (shuffleCount) => {
    if (shuffleCount < difficulty) {
      props.setCardData(shuffle(cards));
    }
  };

  // rotate the card that is clicked after the click, and after a second
  // rotate every other card
  const handleClick = (index) => () => {
    setRotated([...rotated.slice(0, index), true, ...rotated.slice(index)]);
    setTimeout(() => {
      setRotated((rot) => rot.fill(true));
    }, 1000);
  };

  // transition object, use widths of the cards to determine their x positions
  let width = 0;
  const cardTransitions = useTransition(
    cards.map((card, index) => {
      width += card.cardWidth;
      return {
        ...card,
        x:
          200 / difficulty +
          width -
          card.cardWidth +
          (index * 100) / (difficulty * 2),
      };
    }),
    {
      key: (card) => card.key,
      from: { width: 0, opacity: 0 },
      leave: { width: 0, opacity: 0 },
      enter: ({ x, cardWidth }) => ({ x, width: cardWidth, opacity: 1 }),
      update: ({ x, cardWidth }) => ({ x, width: cardWidth }),
      delay: 500,
    }
  );

  // rotate each card after the start and shuffle them
  useEffect(() => {
    /* eslint-disable no-plusplus */
    setTimeout(() => {
      setRotated((rot) => rot.fill(true));
      shuffleCards(count);
      setCount((c) => c + 1);
    }, 1000);
  }, [started]);

  return (
    <>
      {cardTransitions((style, card, t, index) => {
        return (
          <Card
            style={style}
            data={card}
            length={cards.length}
            handleClick={handleClick(index)}
            rotated={rotated[index]}
          />
        );
      })}
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
    })
  ).isRequired,
  started: PropTypes.bool.isRequired,
  setCardData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { setCardData })(CardContainer);

/*

<animated.div
          onClick={handleClick(card.index)}
          className="card"
          style={{ zIndex: cards.length - card.index, ...style }}
        >
          <animated.div className="card__cell">
            <animated.div
              className="card__side card__side--front"
              style={frontSprings[card.index]}
            >
              <img
                src={card.pic}
                className="card__picture"
                alt={`${card.theme}`}
              />
            </animated.div>
            <animated.div
              className="card__side card__side--back"
              style={backSprings[card.index]}
            >
              <img
                src={card.themePic}
                className="card__icon"
                alt={`${card.theme} icon`}
              />
            </animated.div>
          </animated.div>
        </animated.div>

*/
