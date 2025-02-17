type Stack []rune

func (s *Stack) IsEmpty() bool {
    return len(*s) == 0
}

func (s *Stack) Pop() rune {
    if s.IsEmpty() {
        var r rune
        return r
    }
    top := len(*s) - 1
    item := (*s)[top]
    *s = (*s)[:top]
    return item
}

func (s *Stack) Push(item rune) {
    *s = append(*s, item)
}


func isValid(s string) bool {
    if (len(s) & 1) == 1 {
        return false
    }

    bracketPairs := map[rune]rune {
        ']': '[',
        '}': '{',
        ')': '(',
    }
    
    stack := Stack{}
    
    for _, c := range s {
        if c == '[' || c == '{' || c == '(' {
            stack.Push(c)
            continue
        }
        if stack.Pop() != bracketPairs[c] {
            return false
        }
    }
    
    return stack.IsEmpty()
}