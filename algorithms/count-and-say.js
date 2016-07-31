/**
 * 38. Count and Say
 * https://leetcode.com/problems/count-and-say/
 *
 * The count-and-say sequence is the sequence of integers beginning as follows:
 * 1, 11, 21, 1211, 111221, ...
 *
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 *
 * Given an integer n, generate the nth sequence.
 * Note: The sequence of integers will be represented as a string.
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var result = '1';
  var prev;
  var target;
  var count;
  var i;

  while (n > 1) {
    prev = result;
    target = prev[0];
    result = '';
    count = 0;

    for (i = 0; i <= prev.length; i++) {
      if (prev[i] === target) {
        count += 1;
      } else {
        result += count + target;
        target = prev[i];
        count = 1;
      }
    }

    n -= 1;
  }

  return result;
};
