function isMatch(s: string, p: string): boolean {
  const sLen = s.length, pLen = p.length;
  // dp[i][j] : s의 첫 i문자와 p의 첫 j문자가 매칭되는지 여부
  const dp: boolean[][] = Array.from({ length: sLen + 1 }, () => Array(pLen + 1).fill(false));

  // 공백 문자열과 공백 패턴은 매칭됨
  dp[0][0] = true;

  // s가 빈 문자열일 때, p가 '*'로만 이루어진 경우 매칭될 수 있음
  for (let j = 1; j <= pLen; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1];
    }
  }

  // dp 테이블 채우기
  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= pLen; j++) {
      if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
        // 현재 문자가 일치하거나 '?'인 경우, 이전 상태를 그대로 가져옴
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        // '*'인 경우, 두 가지 선택지
        // 1. '*'를 빈 문자열로 처리 (dp[i][j-1])
        // 2. '*'를 하나 이상의 문자로 처리 (dp[i-1][j])
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      } else {
        // 현재 문자가 일치하지 않는 경우
        dp[i][j] = false;
      }
    }
  }

  return dp[sLen][pLen];
}
