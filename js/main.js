function getRandomIntInclusive(min, max) {
  if (min >= 0 && max >= min) {
    min = Math.ceil(min);
    max = Math.round(max);
    return Math.round(Math.random() * (max - min) + min);
  }
  throw new Error('Ошибка. Обнаружено не соответствие условию.');
}
getRandomIntInclusive(1, 3);

function getRandomFloat(min, max, numb) {
  if (min >= 0 && max >= min) {
    return (Math.random() * (max - min + 1) + min).toFixed(numb);
  }
  throw new Error('Ошибка. Обнаружено не соответствие условию.');
}
getRandomFloat(1, 3, 2);
