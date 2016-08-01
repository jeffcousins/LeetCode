/**
 * 17. Letter Combinations of a Phone Number
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 * Given a digit string, return all possible letter combinations that the
 * number could represent.
 *
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 * Note:
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var len = digits.length;
  var results = [];
  var phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  if (len === 0) {
    return results;
  }

  if (len === 1) {
    return phoneMap[digits].split('');
  }

  (function makeCombos(current, remaining) {
    var options;
    var i;

    if (current.length === len) {
      results.push(current);
      return;
    }

    options = phoneMap[remaining[0]];
    remaining = remaining.slice(1);

    for (i = 0; i < options.length; i++) {
      makeCombos(current + options[i], remaining);
    }
  })('', digits);

  return results;
};
