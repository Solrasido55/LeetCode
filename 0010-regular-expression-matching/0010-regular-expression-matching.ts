function isMatch(s: string, p: string): boolean {
    const memo = {};

    function dp(i: number, j: number): boolean {
      const key = `${i},${j}`;
      if (memo.hasOwnProperty(key)) return memo[key];
  
      if (j === p.length) {
        return i === s.length;
      }
  
      const firstMatch = (i < s.length && (p[j] === s[i] || p[j] === '.'));
  
      if (j + 1 < p.length && p[j + 1] === '*') {
        memo[key] = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
        return memo[key];
      } else {
        memo[key] = firstMatch && dp(i + 1, j + 1);
        return memo[key];
      }
    }
  
    return dp(0, 0);
}