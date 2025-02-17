function isValid(s: string): boolean {
    if (s.length & 1) return false
    
    const map = new Map<string, string>([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ]);
    const open = new Set(map.values());
    const close = new Set(map.keys());

    const stack: string[] = [];

    for (const c of s) {
        if (open.has(c)) {
            stack.push(c);
            continue;
        }
        if (stack.length === 0 || (stack.pop() !== map.get(c))) {
            return false;
        }
    }
    return stack.length === 0;
};