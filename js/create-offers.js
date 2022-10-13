import { getRandomArrayElement, getRandomNumber, getNewArray } from "./util.js";

const TYPES_OF_BUILDING = [
  "palace",
  "flat",
  "house",
  "bungalow",
  "hotel",
];

const CHECK_TIMES = ["12:00", "13:00", "14:00"];

const FEATURES = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner",
];

const PHOTOS = [
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg",
];

const TITLES = ["Квартира", "Дом", "Лофт", "Дача"];
 
const DESCRIPTIONS = [
  "Шикарноый вид из окна",
  "Отличный ремонт",
  "Есть вся мебель",
  "Есть вся техника для уютного проживания",
  "Хорошие соседи",
];

const createAvatar = () => {
  let index = getRandomNumber(1, 10);
  if (index < 10) {
    index = `0${index}`;
  }
  return `img/avatars/user/${index}.png`;
};

const RANDOM_OFFER_COUNT = 10;

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

const createOffers = () => Array.from({ length: RANDOM_OFFER_COUNT }, createOffer);

export {createOffers};
