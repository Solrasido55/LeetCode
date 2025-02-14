class ProductOfNumbers {
    private list: number[];
    private size: number;
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(num: number): void {
        this.size++;
        switch (true) {
            case num === 0:
                this.list.length = 0;
                break;
            case this.list.length === 0:
                this.list.push(num);
                break;
            default:
                const last = this.list[this.list.length - 1];
                this.list.push(last * num);
                break;
        }
        return null;
    }

    getProduct(k: number): number {
        const length = this.list.length;
        const last = length - 1;
        switch (true) {
            case k > length:
                return length === this.size ? this.list[last] : 0
            case k === length:
                return this.list[last]
            default:
                return this.list[last] / this.list[last - k]
        }
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */