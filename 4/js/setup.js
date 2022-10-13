import { getRandomArrayElement, getRandomNumber } from "./util.js";
import { getNewArray, createAvatar } from "./data.js";
import {
  TITLES,
  TYPES_OF_BUILDING,
  CHECK_TIMES,
  FEATURES,
  DESCRIPTIONS,
  PHOTOS,
  RANDOM_OFFER_COUNT,
} from "./const.js";
const createOffer = () => {
  const location = {
    lat: getRandomNumber(35.65, 35.7, 5),
    lng: getRandomNumber(139.7, 139.8, 5),
  };
  return {
    author: {
      avatar: createAvatar(),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomNumber(10000, 100000),
      type: getRandomArrayElement(TYPES_OF_BUILDING),
      rooms: getRandomNumber(1, 4),
      quests: getRandomNumber(1, 6),
      checkin: getRandomArrayElement(CHECK_TIMES),
      checkout: getRandomArrayElement(CHECK_TIMES),
      features: getNewArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getNewArray(PHOTOS),
    },
    location,
  };
};

const randomRoom = Array.from({ length: RANDOM_OFFER_COUNT }, createOffer);

export default randomRoom;
