// Piece of data - val
// reference to next node - next

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
    let node = new Node(val);
    //if there is no head property on the list, set the head and tail to be the newly created node
    // this only runs if its empty
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      //   // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
      this.tail.next = node;
      this.tail = node;
    }
    // increamenet the length by 1
    this.length += 1;
    return this;
  }
}

let list = new SinglyLinkedlist();
list.push("Hello world");
list.push("Hi you");
list.push("As");
// list.push("3");
console.log(list);
