function climbStairs(n: number): number {
  let count = 0;
  
  function climb(acc:number, cur: number, goal: number) {
    acc += cur;
    if (acc > goal) return;
    if (acc === goal) {
      count++;
      return;
    }
    climb(acc, 1, goal);
    climb(acc, 2, goal);
  }

  climb(0, 0, n);
  return count;
};
