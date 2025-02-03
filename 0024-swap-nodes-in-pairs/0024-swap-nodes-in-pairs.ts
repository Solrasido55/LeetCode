/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head?.next) {
        return head;
    }
    let dummy = new ListNode(),
    prev = dummy;
    while (head && head.next) {
        const temp = head.next.next;
        head.next.next = head;
        prev.next = head.next
        head.next = temp;
        prev = head;
        head = temp;
    }
    return dummy.next;
};