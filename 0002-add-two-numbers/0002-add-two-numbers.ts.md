## Answer

```typescript
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let carry = 0;
    let sumNode = dummy;
    while (l1 || l2 || carry) {
        let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        carry = sum / 10 >> 0;
        sumNode = sumNode.next = new ListNode(sum % 10);
        l1 = l1?.next;
        l2 = l2?.next;
    }
    return dummy.next;
};
```
