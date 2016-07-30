/**
 * 258. Add Digits
 * https://leetcode.com/problems/add-digits/
 *
 * Given a non-negative integer num, repeatedly add all its digits until the
 * result has only one digit.
 *
 * For example:
 * Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2.
 * Since 2 has only one digit, return it.
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  var newSum;

  if (num < 10) {
    return num;
  }

  newSum = num.toString().split('').reduce(function(sum, digit) {
    return sum + Number(digit);
  }, 0);

  return addDigits(newSum);
};
