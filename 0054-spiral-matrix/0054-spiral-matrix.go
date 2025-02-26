func spiralOrder(matrix [][]int) []int {
	dp := make([][]bool, len(matrix))
    for i := range dp {
        dp[i] = make([]bool, len(matrix[0]))
    }
	res := []int{}

	xMax := len(matrix[0]) - 1
	yMax := len(matrix) - 1

	x, y := 0, 0

	direction := "right"

	for len(res) < (len(matrix[0]) * len(matrix)) {
		res = append(res, matrix[y][x])
		dp[y][x] = true

		switch direction {
		case "right":
			if x == xMax || dp[y][x+1] {
				direction = "down"
				y++
			} else {
				x++
			}
		case "down":
			if y == yMax || dp[y+1][x] {
				direction = "left"
				x--
			} else {
				y++
			}
		case "left":
			if x == 0 || dp[y][x-1] {
				direction = "up"
				y--
			} else {
				x--
			}
		case "up":
			if y == 0 || dp[y-1][x] {
				direction = "right"
				x++
			} else {
				y--
			}
		}

	}

	return res
}
