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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !k) return head;
    let length = 0;
    let cur = head;
    let done = false;
    let map = new Map<number, ListNode>();
    while (cur) {
        map.set(length, cur);
        cur = cur.next;
        length++;
    }
    if (length < 2) return head;
    k = k % length
    if (!k) return head;
    const rotateCount = length - k;
    map.get(rotateCount - 1).next = null;
    map.get(length - 1).next = head;
    return map.get(rotateCount);
};