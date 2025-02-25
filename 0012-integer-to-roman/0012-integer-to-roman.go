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
    th := num / 1000
    h := (num % 1000) / 100
    t := (num % 100) / 10
    o := num % 10

    var roman string
    roman = roman + convert(th, []string{"M", "", ""})
    roman = roman + convert(h, []string{"C", "D", "M"})
    roman = roman + convert(t, []string{"X", "L", "C"})
    roman = roman + convert(o, []string{"I", "V", "X"})
    return roman
}