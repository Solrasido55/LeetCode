function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;
    const dimension:string[][] = [];
    for (let i = 0; i < numRows; i++) {
        dimension.push([])
    }
    let down: boolean = true;
    let row: number = 0;
    let col: number = 0;
    for (const c of s) {
        dimension[row][col] = c;
        if (row === numRows - 1) {
            down = false;
        } 
        if (row === 0) {
            down = true;
        }
        if (down) {
            row++;
        } else {
            row--;
            col++;
        };
    }
    return dimension.flat().join("");
};