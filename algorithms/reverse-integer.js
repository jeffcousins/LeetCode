/**
 * 7. Reverse Integer
 * https://leetcode.com/problems/reverse-integer/
 *
 * Reverse digits of an integer.
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var MAX_32_BIT = 2147483647;
  var result;

  if (x < 0) {
    return -1 * reverse(-x);
  }

  result = Number(x.toString().split('').reverse().join(''));

  if (result > MAX_32_BIT) {
    return 0;
  }

  return result;
};
