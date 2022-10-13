import { getRandomNumber, shuffleArray } from "./util.js";

const getNewArray = (array) =>
  shuffleArray(array).slice(0, getRandomNumber(1, array.length));

const createAvatar = () => {
  let index = getRandomNumber(1, 10);
  if (index < 10) {
    index = `0${index}`;
  }
  return `img/avatars/user/${index}.png`;
};

export { getNewArray, createAvatar };
