const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;

  n.toString().split('').forEach((item, i, arr) => {
    let digitArr = [...arr];
    digitArr.splice(i, 1);
    let digit = Number(digitArr.join(''));
    if (digit > max) max = digit;
  });
  
  return max;
}

module.exports = {
  deleteDigit
};
