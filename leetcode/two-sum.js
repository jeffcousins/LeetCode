/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers, return indices of the two numbers such that
 * they add up to a specific target. You may assume that each input would
 * have exactly one solution.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var storage = {};
  var currentNum;
  var difference;
  var i;

  for (i = 0; i < nums.length; i++) {
    currentNum = nums[i];
    difference = target - currentNum;

    if (difference in storage) {
      return [storage[difference], i];
    } else {
      storage[currentNum] = i;
    }
  }
};
