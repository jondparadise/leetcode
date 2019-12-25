/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let baseNode = new ListNode(0);
    let workingNode = baseNode;
    while (true) {
        if (l1 == null) {
            workingNode.next = l2;
            break;
        }
        else if (l2 == null) {
            workingNode.next = l1;
            break;
        }
        else {
            if (l1.val <= l2.val) {
                workingNode.next = new ListNode(l1.val);
                l1 = l1.next;
            }
            else {
                workingNode.next = new ListNode(l2.val);
                l2 = l2.next;
            }
        }
        workingNode = workingNode.next;
    }
    return baseNode.next;
};