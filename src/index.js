module.exports = function toReadable (number) {
  let numberString = number.toString();
  let numberArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
  let numberArrayBig = ['', '','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let result = '';

  if (number == 0) {
    return "zero";
  }

  if (number <= 20) {
    return numberArray[number];
  }

  if (number > 20 && number <= 99) {
    result = `${numberArrayBig[numberString[0]]} ${
      numberArray[numberString[1]]
    }`;
    return result.trim();
  }

  if (number > 99 && number <= 999) {
    for (let i = 0; i <= numberString.length; i++) {
      if (i == 0) {
        // 9**
        result = `${numberArray[numberString[0]]} hundred`;
      }

      if (i == 1) {
        // 99*
        // если одинарное
        if (numberString[1] == 0) {
          result = `${result}`;
        }
        // если десяток
        if (numberString[1] < 2) {
          result = `${result} ${
            numberArray[Number(numberString[1] + numberString[2])]
          }`;
        }
        // если десятки больше 20
        if (numberString[1] >= 2) {
          result = `${result} ${numberArrayBig[numberString[1]]}`;
        }
      }

      if (i == 2) {
        // 999
        if (numberString[1] > 1) {
          result = `${result} ${numberArray[numberString[2]]}`;
        }
      }
    }
    return result.trim();
  }
};