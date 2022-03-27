const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const controlSequences = {
  '--discard-next': 1,
  '--discard-prev': 2,
  '--double-next': 3,
  '--double-prev': 4,
}

function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);

  let newArr = [...arr];
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    if (controlSequences[newArr[i]] === 1) {
      result.push(undefined);
      i++;
    } else if (controlSequences[newArr[i]] === 2) {
      result.pop();
    } else if (controlSequences[newArr[i]] === 3) {
      result.push(newArr[i + 1]);
    } else if (controlSequences[newArr[i]] === 4) {
      result.push(result[result.length - 1]);
    } else result.push(newArr[i]);
  }
  return result.filter(el => el !== undefined);
}

module.exports = {
  transform
};
