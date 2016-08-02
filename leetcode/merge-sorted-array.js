/**
 * 88. Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
 * one sorted array.
 *
 * Note:
 * You may assume that nums1 has enough space (size that is greater or
 * equal to m + n) to hold additional elements from nums2. The number of
 * elements initialized in nums1 and nums2 are m and n respectively.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var j = m + n - 1;

  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      m -= 1;
      nums1[j] = nums1[m];
    } else {
      n -= 1;
      nums1[j] = nums2[n];
    }

    j -= 1;
  }

  while (n >= 0) {
    n -= 1;
    nums1[n] = nums2[n];
  }
};
