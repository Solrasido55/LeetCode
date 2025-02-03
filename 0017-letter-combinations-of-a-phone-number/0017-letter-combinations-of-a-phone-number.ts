function letterCombinations(digits: string): string[] {
    if (!digits) return [];
    const map = new Map<string, string[]>([
        ["2", ['a', 'b', 'c']],
        ["3", ['d', 'e', 'f']],
        ["4", ['g', 'h', 'i']],
        ["5", ['j', 'k', 'l']],
        ["6", ['m', 'n', 'o']],
        ["7", ['p', 'q', 'r', 's']],
        ["8", ['t', 'u', 'v']],
        ["9", ['w', 'x', 'y', 'z']]
    ])

    const arrays = Array.from(digits).map((digit) => map.get(digit))
    
    return arrays.reduce((acc, cur) => 
         acc.flatMap((a) => cur.map(b => [...a, b]))
    , [[]]).map((array) => array.join(""))
};