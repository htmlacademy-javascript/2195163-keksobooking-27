const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomNumber = (min, max, count = 0) => {
  if (min < 0 || max < 0 || min === max) {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  if (count) {
    return +(Math.random() * (max - min) + min).toFixed(count);
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (arr) => {
  let i = getRandomNumber(0, arr.length - 1);
  if (i === arr.length) {
    i = arr.length - 1;
  }
  return arr[i];
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getNewArray = (array) =>
  shuffleArray(array).slice(0, getRandomNumber(1, array.length));

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { getRandomNumber, shuffleArray, getRandomArrayElement, getNewArray, showAlert, isEscapeKey};
