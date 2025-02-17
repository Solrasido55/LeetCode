func search(nums []int, target int) int {
    left, right := 0, len(nums) - 1

    for left <= right {
        mid := (left + right) / 2
        if nums[left] == target {
            return left
        }
        if nums[right] == target {
            return right
        }
        if nums[mid] == target {
            return mid
        }

        if nums[left] < nums[mid] {
            if nums[left] < target && nums[mid] > target {
                left = left + 1
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if nums[mid] < target && nums[right] > target {
                left = mid + 1
                right = right - 1
            } else {
                right = mid - 1
            }
        }
    
    }
    return -1
}