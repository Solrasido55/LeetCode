function getSubstringLength(char:string, s:string) {
    const arr = [char];
    for (let i = 1; i < s.length; i++) {
        if (arr.includes(s[i])) return arr.length;
        arr.push(s[i])
    }
    return arr.length;
}

function lengthOfLongestSubstring(s: string): number {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let temp = getSubstringLength(s[i], s.substring(i));
        if (temp > res) {
            res = temp;
        };
    };
    return res;
};