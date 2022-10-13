const TYPES_OF_BUILDING = ["palace", "flat", "house", "bungalow", "hotel"];
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

const RANDOM_OFFER_COUNT = 10;

const getRandomNumber = (min, max, count = 0) => {
  if (min < 0 || max < 0 || max === min) {
    return NaN;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return +(Math.random() * (max - min) + min).toFixed(count);
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getNewArray = (array) => shuffleArray(array).slice(0,getRandomNumber(1, array.length));
 

const getRandomArrayElement = (arr) => {
  let i = getRandomNumber(0, arr.length - 1);
  if (i === arr.length) {
    i = arr.length - 1;
  }
  return arr[i];
};

const createAvatar = () => {
  let index = getRandomNumber(1, 10);
  if (index < 10) {
    index = `0${index}`;
  }
  return `img/avatars/user/${index}.png`;
};

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

