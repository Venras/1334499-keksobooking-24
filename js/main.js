function getRandomIntInclusive(min, max) {
  if (min >= 0 && max >= 0) {
    min = Math.ceil(min);
    max = Math.round(max);
    return Math.round(Math.random() * (max - min + 1)) + min;
  }
}

function getRandomFloat(min, max) {
  if (min >= 0 && max >= 0) {
    return Math.random() * (max - min) + min;
  }
}
