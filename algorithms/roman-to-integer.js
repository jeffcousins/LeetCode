/**
 * 13. Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/
 *
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var digits = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var total = 0;
  var curr;
  var next;
  var i;

  for (i = 0; i < s.length; i++) {
    curr = digits[s[i]];
    next = digits[s[i + 1]];

    if (next && curr < next) {
      total -= curr;
    } else {
      total += curr;
    }
  }

  return total;
};
