function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;
    let str = String(x);
    while (str.length >= 1) {
        if (str[0] !== str[str.length - 1]) return false;
        str = str.slice(1,-1);
    }
    return true;
};