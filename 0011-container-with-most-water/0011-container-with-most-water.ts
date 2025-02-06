function maxArea(height: number[]): number {
    let res = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        const w = r - l;
        const lh = height[l];
        const rh = height[r];
        const h = lh < rh ? lh : rh;
        const ext = w * h;
        if (res < ext) {
            res = ext;
        }
        lh < rh ? l++ : r--;
    }
    return res;
};