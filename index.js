function luhnValidate(cardNumber) {
  let totalSum = 0;
  let doubleDigit = false;
  let index = cardNumber.length - 1;
  let currentDigit;

  while (index >= 0) {
    currentDigit = parseInt(cardNumber.charAt(index), 10);

    if (doubleDigit) {
      currentDigit *= 2;
      if (currentDigit > 9) {
        currentDigit = (currentDigit % 10) + 1;
      }
    }

    doubleDigit = !doubleDigit;
    totalSum += currentDigit;
    index--;
  }

  return totalSum % 10 === 0;
}

module.exports = { luhnValidate };


