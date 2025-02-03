/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const map = new Map<string, number>();
    const length = matrix.length;
    const coord = (i:number, j:number) => `${i},${j}`
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            map.set(coord(i, j), matrix[i][j]);
            const last = length - 1 - j;
            matrix[i][j] = map.get(coord(last, i)) ?? matrix[last][i];
        }
    }
};