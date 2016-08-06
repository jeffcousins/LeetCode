/**
 * 46. Permutations
 * https://leetcode.com/problems/permutations/
 *
 * Given a collection of distinct numbers, return all possible permutations.
 *
 * For example,
 * [1,2,3] have the following permutations:
 *
 *  [
 *    [1,2,3],
 *    [1,3,2],
 *    [2,1,3],
 *    [2,3,1],
 *    [3,1,2],
 *    [3,2,1]
 *  ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var results = [];

  function findPermutations(current, remaining) {
    if (!remaining.length) {
      return results.push(current);
    }

    remaining.forEach(function(num, i) {
      var left = remaining.slice(0, i);
      var right = remaining.slice(i + 1);
      findPermutations(current.concat(num), left.concat(right));
    });
  }

  findPermutations([], nums);
  return results;
};
