const TYPE_BUILDING = ["palace", "flat", "house", "bungalow", "hotel"];
const TIME_CHECK = ["12:00", "13:00", "14:00"];
const COMFORT = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner",
];
const PHOTOS_LIST = [
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg",
];
const TITLE_HOUSE = ["Квартира", "Дом", "Лофт", "Дача"];
const DESCRIPTION_LIST = [
  "Шикарноый вид из окна",
  "Отличный ремонт",
  "Есть вся мебель",
  "Есть вся техника для уютного проживания",
  "Хорошие соседи",
];
const RANDOM_ROOM_COUNT = 10;

const getRandomNumber = (min, max, count = 0) => {
  if (min < 0 || max < 0 || max === min) {
    return NaN;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return +(Math.random() * (max - min) + min).toFixed(count);
};

const getRandomArrayElement = (arr) => {
  let i = getRandomNumber(0, arr.length - 1);
  if (i === arr.length) {
    i = arr.length - 1;
  }
  return arr[i];
};

const getNewArray = (object) => {
  const newArray = [];
  const newArrayLength = getRandomNumber(1, object.length - 1);

  for (let i = 1; i <= newArrayLength; i++) {
    const options = object.shift();
    newArray.push(options);
  }

  return newArray;
};

function n(n) {
  {
    return n > 9 ? "" + n : "0" + n;
  }
}
const author = {
  avatar: `img/avatars/user/${n(getRandomNumber(1, 10))}.png`,
};
const location1 = {
  lat: getRandomNumber(35.65, 35.7, 5),
  lng: getRandomNumber(139.7, 139.8, 5),
};

const createOffer = () => ({
  author,
  offer: {
    title: getRandomArrayElement(TITLE_HOUSE),
    address: `${location1.lat}, ${location1.lng}`,
    price: getRandomNumber(10000, 100000),
    type: getRandomArrayElement(TYPE_BUILDING),
    rooms: getRandomNumber(1, 4),
    quests: getRandomNumber(1, 6),
    checkin: getRandomArrayElement(TIME_CHECK),
    checkout: getRandomArrayElement(TIME_CHECK),
    features: getNewArray(COMFORT),
    description: getRandomArrayElement(DESCRIPTION_LIST),
    photos: getNewArray(PHOTOS_LIST),
  },
  location1,
});

const randomRoom = Array.from({ length: RANDOM_ROOM_COUNT }, createOffer);
console.log(randomRoom);
