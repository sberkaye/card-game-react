/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { animated, useTransition, useChain, useSpringRef } from "react-spring";
import PropTypes from "prop-types";
import { shuffle } from "lodash";
import Card from "./Card";

// import cardDataActions from "../redux/actions/actionCardData";

// const { setCardData } = cardDataActions;

const CardContainer = (props) => {
  const { started, cards, difficulty, setStarted } = props;
  const [finished, setFinished] = useState(false);
  const [success, setSuccess] = useState("");
  const [ownCards, setCards] = useState(cards);
  // const [count, setCount] = useState(0);

  // const shuffleCards = (shuffleCount, newCards) => {
  //   if (shuffleCount < difficulty) {
  //     props.setCardData(shuffle(newCards));
  //   }
  // };

  // rotate the card that is clicked after the click, and after a second
  // rotate every other card
  const handleClick = (index) => () => {
    setCards(
      ownCards.map((card, cardIndex) => {
        if (index === cardIndex) {
          return {
            ...card,
            rotated: false,
          };
        }
        return card;
      })
    );
    setTimeout(() => {
      setCards(ownCards.map((card) => ({ ...card, rotated: false })));
    }, 1000);
    if (ownCards[index].unique) {
      setSuccess("success");
      console.log("success");
    } else {
      setSuccess("fail");
      console.log("fail");
    }
    setTimeout(() => setStarted(false), 2000);
  };

  const resultRef = useSpringRef();
  const resultTransition = useTransition(success, {
    from: { opacity: 0, y: 1000, transform: "scale(0)" },
    enter: { opacity: 1, y: 0, transform: "scale(1)" },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    delay: 1000,
    ref: resultRef,
  });

  // transition object, use widths of the cards to determine their x positions
  const cardsRef = useSpringRef();
  let width = 0;
  const cardTransitions = useTransition(
    ownCards.map((card, index) => {
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
      ref: cardsRef,
    }
  );

  useChain([cardsRef, resultRef], [0, difficulty + 7]);
  // rotate each card after the start and shuffle them
  useEffect(() => {
    setTimeout(() => {
      setCards(ownCards.map((card) => ({ ...card, rotated: true })));
    }, 2000);
    // setTimeout(() => {
    //   shuffleCards(
    //     count,
    //     cards.map((card) => ({ ...card, rotated: true }))
    //   );
    // }, 3000);
    // setCount((c) => c + 1);
    for (let i = 0; i < difficulty + 1; i += 1) {
      setTimeout(() => {
        setCards(shuffle(ownCards.map((card) => ({ ...card, rotated: true }))));
      }, (i + 3) * 1000);
    }
    setTimeout(() => setFinished(true), (difficulty + 4) * 1000);
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
            rotated={card.rotated}
            finished={finished}
          />
        );
      })}
      {resultTransition((style, status) =>
        status.length ? (
          status === "success" ? (
            <animated.div
              style={style}
              className="result-text result-text--success"
            >
              SUCCESS
            </animated.div>
          ) : (
            <animated.div
              style={style}
              className="result-text result-text--fail"
            >
              FAIL
            </animated.div>
          )
        ) : (
          <></>
        )
      )}
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
  setStarted: PropTypes.func.isRequired,
  // setCardData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CardContainer);

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
