class ProductOfNumbers {
    private list: number[] = []
    constructor() {}

    add(num: number): void {
        this.list.push(num);
        return null;
    }

    getProduct(k: number): number {
        const last:number = this.list.length - 1;
        let result: number;
        for (let i = last; i > last - k; i--) {
            result = (result ?? 1) * this.list[i]
        }
        return result;
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */