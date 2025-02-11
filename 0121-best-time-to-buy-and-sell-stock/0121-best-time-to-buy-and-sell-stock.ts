function maxProfit(prices: number[]): number {
    const days = prices.length;
    const dp: number[][] = Array.from({length: days}, (x) => []);
    dp[0][0] = 0
    dp[0][1] = -prices[0]

    for (let i = 1; i < days; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
    }
    
    return dp[days - 1][0]
};
