function reverse(x: number): number {
    let isNagative = false;
    if (x < 0) {
        x = x * -1;
        isNagative = true;
    }
    
    const reversed = Number(String(x).split("").reverse().join(""))
    const result = isNagative ? reversed * -1 : reversed;
    if ((result < (-2)**31) || result > (2**31)-1) return 0;
    return result;
};