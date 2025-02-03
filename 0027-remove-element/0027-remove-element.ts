function removeElement(nums: number[], val: number): number {
    let matched = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if(count === nums.length) {
            return nums.length - matched;
        }
        if (nums[i] === val) {
            if (typeof nums[i] !== 'number') continue;
            nums[i] = undefined as number;
            [nums[i], nums[nums.length-1-matched]] = [nums[nums.length-1-matched], nums[i]];
            i--;
            matched++;
        }
        count++;
    }
};