/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const zip = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  const curr = new Node(l1.value);
  curr.next = zip(l2, l1.next);
  return curr;
};

const list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(5);
const list2 = new Node(2);
list2.next = new Node(4);
list2.next.next = new Node(6);

module.exports = { Node, zip };