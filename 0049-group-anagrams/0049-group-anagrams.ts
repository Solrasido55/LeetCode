function isEquality(a1: Array<string>, a2: Array<string>): boolean {
    if (a1.length !== a2.length) return false;
    const frequencyMap = a1.reduce((map, str) => {
        if (map.has(str)) {
            map.set(str, map.get(str) + 1);
        } else {
            map.set(str, 1)
        }
        return map;
    },new Map<string, number>());

    for (const str of a2) {
        const val = frequencyMap.get(str);
        if (!val) {
            return false;
        };
        frequencyMap.set(str, val - 1);
    };

    return true;
}

function groupAnagrams(strs: string[]): string[][] {
    const map: Map<Array<string>,string[]> = strs.reduce((map, str) => {
        const strArr = str ? Array.from(str) : [""]
        const key = [...map.keys()].find((arr: Array<string>) => isEquality(arr, strArr)) ?? strArr;
        if (!map.has(key)) {
            map.set(key, [str]);
        } else {
            map.set(key, [...map.get(key), str]);
        };
        return map;
    }, new Map<Array<string>, string[]>());
    return [...map.values()]
};