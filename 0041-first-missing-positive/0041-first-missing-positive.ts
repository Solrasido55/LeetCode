function firstMissingPositive(nums: number[]): number {
    const arr = [];
    for (const n of nums) {
        if (n > 0) {
            arr[n - 1] = n;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) return i + 1
    }
    return arr.length + 1
};