func perm(nums []int, visited []bool, result []int) [][]int {
    if len(nums) == len(result) {
        temp := make([]int, len(result))
        copy(temp, result)
        return [][]int{temp}
    }

    var res [][]int

    for i, v := range nums {
        if !visited[i] {
            visited[i] = true
            res = append(res, perm(nums, visited, append(result, v))...)
            visited[i] = false
        }
    }
    return res
}

func permute(nums []int) [][]int {
    visited := make([]bool, len(nums))

    return perm(nums, visited, []int{})
}