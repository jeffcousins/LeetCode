/**
 * 9. Palindrome Number
 * https://leetcode.com/problems/palindrome-number/
 *
 * Determine whether an integer is a palindrome. Do this without extra space.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = x.toString();
  var i = 0;
  var j = x.length - 1;

  while (i < j) {
    if (x[i] !== x[j]) {
      return false;
    }

    i += 1;
    j -= 1;
  }

  return true;
};
