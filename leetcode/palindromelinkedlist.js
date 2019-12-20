/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    var arr = linkedListToArray(head);
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] != arr[arr.length - 1 - i]) return false;
    }
    return true;
};

function linkedListToArray(node) {
    var retVal = [];
    var sll = node;
    while (sll != null) {
        retVal.push(sll.val);
        sll = sll.next;
    }
    return retVal;
}