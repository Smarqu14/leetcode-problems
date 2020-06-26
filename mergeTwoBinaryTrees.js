/* Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.
Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
   5   4   7
   

   Note: The merging process must start from the root nodes of both trees.


   */

   /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 I: two binary trees (t1, t2)
 O: merged binary tree - t3
 C: none
 E: (t1.val !== t2.val) = sum of both.
     If they are the same put it the same node in the new tree
     if they are new. add them to the tree
*/

var mergeTrees = function(t1, t2) {
  // I need to create a new tree
  const t3 = (val, left, right)  => {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
  
  if (t1.val !==     
};