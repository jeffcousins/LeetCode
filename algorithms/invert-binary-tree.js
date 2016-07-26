/**
 * 226. Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/
 *
 * Invert a binary tree.
 *
 *       4
 *     /   \
 *    2     7
 *   / \   / \
 *  1   3 6   9
 *
 *  to
 *
 *       4
 *     /   \
 *    7     2
 *   / \   / \
 *  9   6 3   1
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  var temp;

  if (!root) {
    return root;
  }

  if (root.left || root.right) {
    temp = root.left;
    root.left = root.right;
    root.right = temp;
  }

  if (root.left) {
    invertTree(root.left);
  }

  if (root.right) {
    invertTree(root.right);
  }

  return root;
};
