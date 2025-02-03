function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const m = nums1.length;
    const n = nums2.length;
    const medianIndex = ((m+n) % 2) ? [(m+n)/2 >> 0] : [((m+n)/2) - 1, (m+n)/2];
    const limit = Math.max(...medianIndex);
    const combined = [];
    const seenMap = new Map<number, number>([[1, 0], [2, 0]]);
    while (combined.length <= limit) {
        const i1 = seenMap.get(1);
        const i2 = seenMap.get(2);
        if ((nums1[i1] ?? Infinity) < (nums2[i2] ?? Infinity)) {
            combined.push(nums1[i1]);
            seenMap.set(1, i1+1);
        } else {
            combined.push(nums2[i2]);
            seenMap.set(2, i2+1);
        }
    }
    const a = medianIndex.reduce((acc,cur) => {
        return acc + combined[cur];
    }, 0)
    return a / medianIndex.length;
};