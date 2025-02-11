function isMatch(s: string, p: string): boolean {
  let si = 0;
  let pi = 0;
  while (pi < p.length || si < s.length) {
      const r = p[pi];
      const c = s[si];
      if (r === '*') {
          pi++;
          continue;
      }
      if ((r === '?' && !!c) || (r === c)) {
          si++;
          pi++;
          continue;
      }
      if (p[pi - 1] === '*') {
          si++;
          continue;
      }
      return false;
  }
  return true;
};