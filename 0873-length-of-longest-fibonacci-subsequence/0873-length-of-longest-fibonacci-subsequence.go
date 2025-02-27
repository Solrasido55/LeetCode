func lenLongestFibSubseq(arr []int) int {
	indexMap := make(map[int]int)
	for i, val := range arr {
		indexMap[val] = i
	}

	dp := make(map[[2]int]int)
	maxLen := 0

	for i := 0; i < len(arr); i++ {
		for j := 0; j < i; j++ {
			sum := arr[j] + arr[i]

			if k, exists := indexMap[sum]; exists {
				prevLen := dp[[2]int{j, i}]
				if prevLen == 0 {
					prevLen = 2
				}
				dp[[2]int{i, k}] = prevLen + 1
				maxLen = max(maxLen, dp[[2]int{i, k}])
			}
		}
	}

	if maxLen < 3 {
		return 0
	}
	return maxLen
}