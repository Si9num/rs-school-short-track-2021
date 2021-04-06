/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] && arr[i] !== arr[i + 2] && arr[i] !== arr[i + 3]) {
      arr.splice(i, 1, 2);
    } else if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2] && arr[i] !== arr[i + 3]) {
      arr.splice(i, 2, 3);
    } else if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
      arr.splice(i, 3, 4);
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
