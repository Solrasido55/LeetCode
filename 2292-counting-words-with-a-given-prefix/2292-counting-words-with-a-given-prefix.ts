function prefixCount(words: string[], pref: string): number {
    return words.reduce((acc, word)=>{
        if (word.startsWith(pref)) {
            acc++;
        }
        return acc;
    },0)
};