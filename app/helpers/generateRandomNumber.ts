const generateRandomNumber = (
  min: number,
  max: number,
  exclude: number,
  attempts: number = 0
): number => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude && attempts < 10) {
    return generateRandomNumber(min, max, exclude, attempts + 1);
  } else if (randomNumber === exclude) {
    return randomNumber === min ? min + 1 : min;
  } else {
    return randomNumber;
  }
};

export default generateRandomNumber;
