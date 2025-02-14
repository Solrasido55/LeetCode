/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {
        return head
    }
    
    dummy := ListNode{Val: 0, Next: head}
    
    for head.Next != nil {
        next := head.Next
        if next.Val == head.Val {
            head.Next = next.Next
        } else {
            head = head.Next
        }
    }
    
    return dummy.Next
}