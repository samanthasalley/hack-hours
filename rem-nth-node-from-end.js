/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * ==========================
 * LEETCODE ACCEPTED SOLUTION
 * ==========================
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  // keep track of length
  let len = 0;
  
  // loop through whole list
  let cur = head;
  do {
      len++;
      cur = cur.next;
  }
  while (cur);
  
  // determine nth to last node position
  const rem = len - n;
  
  // handle removing head
  if (rem === 0) {
      head = head.next;
      return head;
  }
  
  // loop through again to the nth position
  let pos = 0;
  let prev = head;
  cur = head;
  while (pos < rem) {
      prev = cur;
      cur = cur.next;
      pos++;
  }
  
  // remove the nth node
  prev.next = cur.next;
  
  // return head
  return head;
};