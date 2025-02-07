function multiply(num1: string, num2: string): string {
    if ([num1, num2].includes("0")) return "0"
    const stringToNumArr = (num: string):number[] => {
        const arr: number[] = [];
        for (let i = num.length; i > 0; i--) {
            arr.push(Number(num[i - 1]));
        }
        return arr;
    }
    const arr1: number[] = stringToNumArr(num1);
    const arr2: number[] = stringToNumArr(num2);

    const digits: number[] = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            const index = i + j;
            let m = arr1[i] * arr2[j];
            if (digits[index]) {
                m = m + digits[index];
            }
            if (m < 10) {
                digits[index] = m;
                continue;
            }
            let num = m % 10;
            let up = Math.floor(m / 10);
            digits[index] = num;
            if (digits[index + 1]) {
                digits[index + 1] = digits[index + 1] + up;
            } else {
                digits[index + 1] = up;
            }
        }
    }
    let res = "";
    for (const d of digits) {
        res = String(d) + res;
    }
    return res;
};