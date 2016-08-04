/**
 * 19. Remove Nth Node From End of List
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 * Given a linked list, remove the nth node from the end of list and return
 * its head.
 *
 * For example,
 * Given linked list: 1->2->3->4->5, and n = 2.
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 *
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var node = head;
  var arr = [];
  var prev;

  while (node) {
    arr.push(node);
    node = node.next;
  }

  if (arr.length === n) {
    return head.next;
  }

  prev = arr[arr.length - n - 1];
  prev.next = prev.next.next;
  return head;
};
