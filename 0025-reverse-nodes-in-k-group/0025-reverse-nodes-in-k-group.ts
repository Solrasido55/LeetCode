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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    const list = [];
    let length = 0;
    while (head) {
        list.push(head);
        head = head.next;
        length++;
    };
    const iterationCount = Math.floor(length / k);
    const result = [];
    for (let i = 0; i < iterationCount; i++) {
        const spliced = list.splice(0, k)
        spliced.reverse();
        result.push(...spliced);
    }
    result.push(...list);
    const dummy = new ListNode();
    let cur = dummy;
    result.forEach((node) => {
        cur.next = node;
        cur = cur.next;
    });
    cur.next = null;
    return dummy.next;
};