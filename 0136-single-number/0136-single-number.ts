function singleNumber(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    const map = new Map();
    for (const n of nums) {
        if (!map.has(n)) {
            map.set(n, 1);
        } else {
            map.set(n, map.get(n) + 1);
        }
    }
    const iter = map.entries();
    let cur = iter.next();
    while (!cur.done) {
        const [n, c] = cur.value;
        if (c === 1) return n;
        cur = iter.next()
    };
};