func convert(num int, roman []string)string {
    if num == 0 {
        return ""
    }    
    if num == 9 {
        return roman[0] + roman[2]
    }
    if num >= 5 {
        res := roman[1]
        for i := 0; i < num - 5; i++ {
            res = res + roman[0]
        }
        return res
    }
    if num == 4 {
        return roman[0] + roman[1]
    }
    var res string
    for i := 0; i < num; i++ {
            res = res + roman[0]
        }
    return res
}
func intToRoman(num int) string {
    th := (num / 1000) * 1000
    h := ((num - th) / 100) * 100
    t := ((num - th - h) / 10) * 10
    o := num - th - h - t

    var roman string

    roman = roman + convert(th / 1000, []string{"M", "", ""})
    roman = roman + convert(h / 100, []string{"C", "D", "M"})
    roman = roman + convert(t / 10, []string{"X", "L", "C"})
    roman = roman + convert(o, []string{"I", "V", "X"})
    return roman
}