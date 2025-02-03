function longestCommonPrefix(strs: string[]): string {
    const a = strs[0];
    let cur = '';
    for (let i = 0; i < a.length; i++) {
        if (strs.every(s => s.startsWith(cur + a[i]))) {
            cur = cur+a[i]
        }
    }
    return cur;
};