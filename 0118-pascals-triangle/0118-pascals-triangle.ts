function generate(numRows: number): number[][] {
    const dp: number[][] = Array.from({length: numRows}, (x, i) => Array.from({length: i+1}, () => 1));
    
    for (let i = 1; i < numRows; i++) {
        for (let j = 1; j < dp[i].length - 1; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
    }

    return dp
};