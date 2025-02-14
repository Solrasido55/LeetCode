/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if (!root?.val) return 0;

    const current = (root.val >= low && root.val <= high) ? root.val : 0
    
    const left = rangeSumBST(root.left, low, high);
    const right = rangeSumBST(root.right, low, high);

    return current + left + right
};