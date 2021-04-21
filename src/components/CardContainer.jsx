/* eslint-disable no-return-assign */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useSprings, useTransition, animated } from "react-spring";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import animals from "../img/animals.svg";
import flowers from "../img/flowers.svg";
import cars from "../img/cars.svg";
import sports from "../img/sports.svg";

const logos = {
  animals,
  flowers,
  cars,
  sports,
};

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
  const { difficulty, theme, pics, started } = props;
  const [random, setRandom] = useState(0);
  const [cards, setCards] = useState(new Array(difficulty + 2));
  const [rotated, setRotated] = useState(new Array(difficulty + 2).fill(false));
  // springs to rotate sides of the cards for each card
  const [frontStyles, setFrontStyles] = useSprings(difficulty + 2, () => ({
    transform: "",
  }));

  console.log(`frontStyles`, frontStyles);
  const [backStyles, setBackStyles] = useSprings(difficulty + 2, () => ({
    transform: "",
  }));

  console.log(`frontStyles: `, frontStyles);

  const handleClick = (index) => () => {
    setRotated(insertIntoIndex(rotated, index, true));
  };

  // initialize each style
  useEffect(() => {
    frontStyles.forEach((style, index) => {
      setFrontStyles(
        insertIntoIndex(frontStyles, index, {
          transform: rotated ? "rotateY(-180deg)" : "",
        })
      );
      setBackStyles(
        insertIntoIndex(backStyles, index, {
          transform: rotated ? "rotateY(0)" : "",
        })
      );
    });
  }, []);

  // let width = 0;
  // const transitions = useTransition(
  //   cardRefs.current.map((ref) => ({
  //     ...ref,
  //     x: (width += ref.clientWidth) - ref.clientWidth,
  //   })),
  //   {
  //     key: () => uuidv4(),
  //     enter: ({ x }) => ({ x }),
  //     update: ({ x }) => ({ x }),
  //   }
  // );

  // const setCardRef = (index) => (ref) => {
  //   console.log(`cardRefs`, cardRefs);
  //   cardRefs.current = [
  //     ...cardRefs.current.slice(0, index),
  //     ref,
  //     ...cardRefs.current.slice(index + 1),
  //   ];
  // };

  // use memoization to decrease the number of times the Cards are re-created and re-rendered
  // const generateCards = useMemo(() => {
  //   return Array.from(Array(difficulty + 2)).map((card, index) => ({
  //     unique: index === random,
  //     key: uuidv4(),
  //     width: 200,
  //   }));
  // }, [difficulty]);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * (difficulty + 2)));
    setCards(
      Array.from(Array(difficulty + 2)).map((card, index) => ({
        unique: index === random,
        key: uuidv4(),
        width: 5,
      }))
    );
  }, [difficulty]);

  useEffect(() => {
    setTimeout(() => {
      setRotated((rot) => rot.fill(true));
    }, 5000);
  }, [started]);

  let width = 0;
  const transitions = useTransition(
    cards.map((card) => ({
      ...card,
      x: (width += card.width) - card.width,
    })),
    {
      key: (item) => item.key,
      enter: ({ x }) => ({ x }),
      update: ({ x }) => ({ x }),
    }
  );
  return (
    <>
      {transitions((style, item, t, index) => (
        <animated.div
          aria-hidden
          onClick={handleClick(index)}
          className="card"
          style={{ zIndex: cards.length - index, ...style }}
        >
          <animated.div
            className="card__side card__side--front"
            style={frontStyles[index]}
          >
            {Object.keys(pics.unique).length && (
              <img
                src={
                  item.unique ? pics.unique.urls.small : pics.regular.urls.small
                }
                className="card__picture"
                alt={`${theme}`}
              />
            )}
          </animated.div>
          <animated.div
            className="card__side card__side--back"
            style={backStyles[index]}
          >
            <img
              src={logos[theme]}
              className="card__icon"
              alt={`${theme} icon`}
            />
          </animated.div>
        </animated.div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme.selectedTheme,
    pics: state.pics.pics,
  };
};

CardContainer.propTypes = {
  difficulty: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
  pics: PropTypes.shape({
    unique: PropTypes.shape({
      urls: PropTypes.shape({ small: PropTypes.string }),
    }),
    regular: PropTypes.shape({
      urls: PropTypes.shape({ small: PropTypes.string }),
    }),
  }).isRequired,
  started: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(CardContainer);

// transitions((style, item, t, index) => (
//   <Card
//     cardRefs={cardRefs}
//     setCardRef={setCardRef(index)}
//     unique={index === random}
//     key={uuidv4()}
//     difficulty={difficulty}
//   />
// ));

/* <Card
        cardRefs={cardRefs}
        setCardRef={setCardRef(index)}
        unique={index === random}
        key={uuidv4()}
        difficulty={difficulty}
      /> */
