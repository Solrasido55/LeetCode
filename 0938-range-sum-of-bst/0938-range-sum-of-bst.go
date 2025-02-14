/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func rangeSumBST(root *TreeNode, low int, high int) int {
    if root == nil || root.Val == 0 {
        return 0
    }
    
    current := func(val int) int {
        if val <= high && val >= low {
            return val
        }
        return 0
    }(root.Val)
    
    left := rangeSumBST(root.Left, low, high)
    right := rangeSumBST(root.Right, low, high)

    return current + left + right
}