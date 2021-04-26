import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import cardDataActions from "../redux/actions/actionCardData";
import unsplash from "../apis/unsplash";
import animals from "../img/animals.svg";
import flowers from "../img/flowers.svg";
import cars from "../img/cars.svg";
import sports from "../img/sports.svg";

const { setCardData } = cardDataActions;

const themePics = { animals, flowers, cars, sports };

/**
 * get a number of random items form an array
 * @param {Array} arr an Array containing the items
 * @param {Number} n number of random items
 *
 * @returns {Array} an array containing the randomly selected items
 */
const getRandom = (arr, n) => {
  const result = new Array(n);
  let { length } = arr;
  const taken = new Array(length); // an array to keep track of taken indexes

  if (n > length) {
    throw new RangeError("getRandom: more elements taken than available");
  }

  // for n times
  /* eslint-disable no-plusplus, no-param-reassign */
  while (n--) {
    const x = Math.floor(Math.random() * length); // get a random index
    // if that index is already taken, get the number on the index in taken array's x index
    // if not, get the number on that index
    result[n] = arr[x in taken ? taken[x] : x];
    // put length - 1 to the x index of taken array, so that we know that the index
    // is taken, and if we ever randomly get that index again, we'll get the number
    // in the length - 1 index of the array
    taken[x] = --length in taken ? taken[length] : length;
  }

  return result;
};

const StartButton = (props) => {
  const { difficulty, setStarted, theme } = props;
  const [random, setRandom] = useState(0);
  /**
   * get 2 random pictures from Unsplash API
   * @returns an object containing 2 different URLs, one for unique picture and one for regular
   */
  const getPictures = async () => {
    const response = await unsplash.get(`/search/photos`, {
      params: {
        query: theme,
      },
    });
    const randomPics = getRandom(response.data.results, 2);
    const uniqueIndex = Math.floor(Math.random() * 2);
    const regular = uniqueIndex === 0 ? 1 : 0;

    return {
      unique: randomPics[uniqueIndex],
      regular: randomPics[regular],
    };
  };

  const handleClick = async () => {
    const pics = await getPictures();
    setRandom(Math.floor(Math.random() * (difficulty + 2)));
    console.log("difficulty :>> ", difficulty);

    console.log(`pics`, pics);
    const cardsData = new Array(difficulty + 2).fill({});
    cardsData.forEach((card, index) => {
      cardsData[index] = {
        theme,
        index,
        unique: index === random,
        pic:
          index === random ? pics.unique.urls.small : pics.regular.urls.small,
        themePic: themePics[theme],
        rotated: false,
      };
    });
    console.log(`cardsData`, cardsData);
    props.setCardData(cardsData);
    setStarted(true);
  };

  return (
    <div id="start-button">
      <button type="button" id="start-button__button" onClick={handleClick}>
        Start
      </button>
    </div>
  );
};

StartButton.propTypes = {
  difficulty: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
  setStarted: PropTypes.func.isRequired,
  setCardData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme.selectedTheme,
    difficulty: state.difficulty.difficulty,
  };
};

export default connect(mapStateToProps, { setCardData })(StartButton);
