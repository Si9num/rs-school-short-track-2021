/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = [];
  arr = n.split('');
  let arr2 = [];
  let res = Boolean;
  arr2 = arr.filter((x) => x === '' || x === '0' || x === '1' || x === '2' || x === '3' || x === '4' || x === '5' || x === '6' || x === '7' || x === '8' || x === '9' || x === '-' || x === 'A' || x === 'B' || x === 'C' || x === 'D' || x === 'E' || x === 'F');
  if (arr.length === arr2.length) {
    res = true;
  } else {
    res = false;
  }
  return res;
}

module.exports = isMAC48Address;
