// Piece of data - val
// reference to next node - next

// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedlist {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    // should accept a value
    // create a new node using the value passed to the function
    const node = new Node(val);
    // if there is no head property on the list, set the head and tail to be the newly created node
    // this only runs if its empty
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      //   // Otherwise set the next property on the tail to be
      // the new node and set the tail property on the list to be the newly created node
      this.tail.next = node;
      this.tail = node;
    }
    // increamenet the length by 1
    this.length += 1;
    return this;
  }
  // Traversing the list, could use for loop using the length
  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }

  pop() {
    /*
   if there are no nodes in the list, return undefined
   loop through the list until you reach the tail
   set the next property of the 2nd to last node to be null
   set the tail to be the 2nd to last node
   decrement the length of the list by 1
   return the value of the node removed
   */

    // if there are no nodes in the list, return undefined
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

const list = new SinglyLinkedlist();
list.push('Hello world');
list.push('Hi you');
list.push('As');
list.push('Hello world');
// list.traverse();
// // list.push("3");
list.pop();
list.pop();
list.pop();

console.log(list);
