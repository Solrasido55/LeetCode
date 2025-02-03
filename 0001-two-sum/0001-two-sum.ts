function twoSum(nums: number[], target: number): number[] {
    let index = 0;
    while (index < nums.length) {
        for (let i = 0; i < nums.length; i++) {
            if (i===index) continue;
            if (nums[index] + nums[i] === target) {
                return [index, i].sort((a,b) => a - b);
            }
        }
        index ++;
    }
};