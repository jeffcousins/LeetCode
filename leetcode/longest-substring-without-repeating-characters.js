/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 *
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the
 * answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var len = s.length;
  var dict = {};
  var result = 0;
  var left = 0;
  var right = 0;
  var char;

  if (len < 2) {
    return len;
  }

  while (right < len) {
    char = s[right];

    if (char in dict) {
      left = Math.max(left, dict[char] + 1);
    }

    dict[char] = right;
    result = Math.max(result, right - left + 1);
    right += 1;
  }

  return result;
};
