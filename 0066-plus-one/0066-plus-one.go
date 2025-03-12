func plusOne(digits []int) []int {
    last := len(digits) - 1

    for i := last; i >= 0; i-- {
        if digits[i] != 9 {
            digits[i] += 1
            return digits
        }
        digits[i] = 0
        if i == 0 {
            return append([]int{1}, digits...)
        }
    }
    return digits
}