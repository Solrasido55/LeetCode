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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const heap = [];

    const pushToHeap = (node: ListNode) => {
        heap.push(node);
        let index = heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (heap[index].val >= heap[parentIndex].val) break;
            [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
            index = parentIndex;
        }
    };

    const popFromHeap = (): ListNode | undefined => {
        if (heap.length === 0) return undefined;
        if (heap.length === 1) return heap.pop();

        const top = heap[0];
        heap[0] = heap.pop()!;

        let index = 0;
        const size = heap.length;

        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let smallest = index;
            if (leftChild < size && heap[leftChild].val < heap[smallest].val) {
                smallest = leftChild;
            }
            if (rightChild < size && heap[rightChild].val < heap[smallest].val) {
                smallest = rightChild;
            }
            if (smallest === index) break;
            [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
            index = smallest;
        }

        return top;
    };

    const start = new ListNode();
    let cur = start;

    for (const list of lists) {
        if (list) {
            pushToHeap(list);
        }
    }

    while (heap.length > 0) {
        const node = popFromHeap();
        cur = cur.next = node;

        if (node.next) {
            pushToHeap(node.next);
        }
    }

    return start.next;
}
