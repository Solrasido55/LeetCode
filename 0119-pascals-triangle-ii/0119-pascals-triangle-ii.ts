function getRow(rowIndex: number): number[] {
    const dp = Array.from({length: rowIndex + 1}, (_, i) => Array.from({length: i + 1}, () => 1));

    for (let i = 1; i <= rowIndex; i++) {
        for (let j = 1; j < dp[i].length - 1; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
        }
    }

    return dp[rowIndex];
};