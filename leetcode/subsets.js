/**
 * 78. Subsets
 * https://leetcode.com/problems/subsets/
 *
 * Given a set of distinct integers, nums, return all possible subsets.
 * Note: The solution set must not contain duplicate subsets.
 *
 * For example,
 *
 * If nums = [1,2,3], a solution is:
 *
 *   [
 *     [3],
 *     [1],
 *     [2],
 *     [1,2,3],
 *     [1,3],
 *     [2,3],
 *     [1,2],
 *     []
 *   ]
 *
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var results = [[]];

  (function makeSubsets(current, remaining) {
    remaining.forEach(function(num, i) {
      results.push(current.concat(num));
      makeSubsets(current.concat(num), remaining.slice(i + 1));
    });
  })([], nums);

  return results;
};
