/* eslint-disable no-empty */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */

/*
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {}
}
const list = new SinglyLinkedList();
*/
/*
 --Pseudo code for pushing method - Trying to implemenmted for 30 minutes--

1) This function should accept a value
2) create a new node using the value passed to the function
3) if there is not head property on the list, set the head and tail to be the newly created node
4) otherwise set the next property on the tail to be the new node and set the tail property on the
list to be the newly created node.
5) Increment the lenngth by one
6)return list
*/

// Create a Node class that takes one val and a next value with a default to null
class Node {
  constructor(val) {
    // set value to this.val
    this.val = val;
    // the default of next is null
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    // create the interface for list
    // default values for head and tail are null
    this.head = null;
    this.tail = null;
    // length is 0 because its empty
    this.length = 0;
  }

  push(val) {
    // Create a new node with the value passed in for pushing into list
    const node = new Node(val);
    // if the head is empty
    if (this.head === null) {
      // head becomes the new node that has value and next properties
      this.head = node;
      // tail also points to the same node since its the first value in our list
      // this.head is equal to new node
      this.tail = this.head;
    } else {
      // if the node is already populated and we just want to push a new value
      // the next value which was null, set it equal to the new node created
      // the tail next will have a value and a next value that is null
      this.tail.next = node;
      // the tail points to the new node. This is because we want to know the end of our list
      // the tail is the last value
      this.tail = node;
    }
    // we increase the length everytime we call this method
    this.length++;
    // return the linkelistswill.russell@mlh.io
    return this;
  }
}

const list = new SinglyLinkedList();
list.push('Hi');
list.push('world');

console.log(list);
