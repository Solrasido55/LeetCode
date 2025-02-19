import "fmt"
func searchInsert(nums []int, target int) int {
    l, r := 0, len(nums) -1

    if nums[l] > target {
        return 0
    }
    if nums[r] < target {
        return r + 1
    }
    
    for l <= r {
        mid := (l + r) / 2
        if nums[l] == target {
            return l
        }
        if nums[mid] == target {
            return mid
        }
        if nums[r] == target {
            return r
        }
        if nums[l] < target && nums[mid] > target {
            if l == mid - 1 {
                return mid
            }
            r = mid
            continue
        } else {
            if mid == r - 1 {
                return r
            }
            l = mid
            continue
        }
    }
    return len(nums)
}