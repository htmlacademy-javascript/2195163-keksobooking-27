const getRandomNumber = (min, max) => {
    if (min < 0 || max < 0 || max === min) {
        return NaN
    }
    if (min > max) {
        [min, max] = [max, min]
    }
    return Math.floor(Math.random() * (max - min + 1)) + min
}
getRandomNumber();
