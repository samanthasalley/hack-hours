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

// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
// const removeNthFromEnd = (head, n) => {
//   // keep track of length
//   let len = 0;
  
//   // loop through whole list
//   let cur = head;
//   do {
//       len++;
//       cur = cur.next;
//   }
//   while (cur);
  
//   // determine nth to last node position
//   const rem = len - n;
  
//   // handle removing head
//   if (rem === 0) {
//       head = head.next;
//       return head;
//   }
  
//   // loop through again to the nth position
//   let pos = 0;
//   let prev = head;
//   cur = head;
//   while (pos < rem) {
//       prev = cur;
//       cur = cur.next;
//       pos++;
//   }
  
//   // remove the nth node
//   prev.next = cur.next;
  
//   // return head
//   return head;
// };

/**
 * ===========================
 * LEETCODE PREFERRED SOLUTION
 * ===========================
 */


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  // create dummy node
  const dummyNode = new ListNode(0);
  dummyNode.next = head;
  
  // set first and second pointer to dummy node
  let first = second = dummyNode;
  
  // create for loop to n + 1, update first to n+1 node
  for (let i = 0; i < n + 1; i++) {
      first = first.next;
  }
  
  // loop while first exists
  while (first) {
      first = first.next;
      second = second.next;
  }
  
  // once it doesn't, set second.next to second.next.next
  second.next = second.next.next
  
  // then return head
  return dummyNode.next;
};