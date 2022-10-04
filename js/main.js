const getRandomNumber = (min, max, count = 0) => {
  if (min < 0 || max < 0 || max === min) {
    return NaN;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return +(Math.random() * (max - min + 1) + min).toFixed(count);
};
getRandomNumber(1, 10, 3);
