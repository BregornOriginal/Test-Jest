function countStringLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  } else {
    throw new Error('Check fail: The length of the word have to be between 1 to 10 characters');
  }
};

// countStringLength('dssa');

function reverseString(anotherString) {
  anotherString = anotherString.split('').reverse().join('');
  return anotherString;
}

// module.exports = countStringLength;

// module.exports = reverseString;

module.exports = { countStringLength, reverseString }