/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Given a string containing just the characters
 * '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * The brackets must close in the correct order, "()" and "()[]{}" are all
 * valid but "(]" and "([)]" are not.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var pairs = { '(': ')', '{': '}', '[': ']' };
  var stack = [];
  var len = s.length;
  var char;
  var i;

  if (!len || len % 2 === 1) {
    return false;
  }

  for (i = 0; i < len; i++) {
    char = s[i];
    if (pairs[char]) {
      stack.push(char);
    } else {
      if (char !== pairs[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
