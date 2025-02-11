function getRow(rowIndex: number): number[] {
    const dp = new Array(rowIndex + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i; j > 0; j--) {
            dp[j] += dp[j - 1];
        }
    }

    return dp;
};