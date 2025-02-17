func removeDuplicates(nums []int) int {
    k := len(nums)
    i := 1
    c := len(nums) - 1
    for c > 0 {
        if nums[i] == nums[i - 1] {
            copy(nums[i:], nums[i+1:])
            nums[len(nums) - 1] = -1
            k--
        } else {
            i++
        }
        c--
    }
    return k
}