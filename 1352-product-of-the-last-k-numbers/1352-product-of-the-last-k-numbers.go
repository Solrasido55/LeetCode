type ProductOfNumbers struct {
    list []int
    size int
}


func Constructor() ProductOfNumbers {
    return ProductOfNumbers {
        list : []int{},
        size : 0,
    }
}


func (this *ProductOfNumbers) Add(num int)  {
    if num == 0 {
        this.list = this.list[:0]
        return
    }
    if len(this.list) == 0 {
        this.list = append(this.list, num)
        return
    }
    last := this.list[len(this.list) - 1]
    this.list = append(this.list, last * num)
}


func (this *ProductOfNumbers) GetProduct(k int) int {
    length := len(this.list)
    last := length - 1
    if k > length {
        if length == this.size {
            return this.list[last]
        } else {
            return 0
        }
    }
    if k == length {
        return this.list[last]
    }
    return this.list[last] / this.list[last - k]
}


/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Add(num);
 * param_2 := obj.GetProduct(k);
 */