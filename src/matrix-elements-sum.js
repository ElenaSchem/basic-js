const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;

  matrix.forEach((item, i) => {
    if (i === 0) {
      item.forEach(val => result += val);
    } else {
      item.forEach((val, j) => {
        if (matrix[i - 1][j] !== 0) {
          return result += val;
        }
      });
    }
  });
  
  return result;
}

module.exports = {
  getMatrixElementsSum
};
