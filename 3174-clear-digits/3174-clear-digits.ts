function clearDigits(s: string): string {
    const arr = Array.from(s);
    function del(arr: string[]): string[] {
        let index:number = -1;
        for (let i = 0; i < arr.length; i++) {
            if (isNaN(Number(arr[i]))) {
                index = i
            } else {
                arr.splice(i, 1);
                if (index !== -1) {
                    arr.splice(index, 1);
                }
                return del(arr);
            }
        }
        return arr;
    }

    return del(arr).join('');
};