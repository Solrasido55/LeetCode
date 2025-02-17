type Stack []string

func (s *Stack) IsEmpty() bool {
    return len(*s) == 0
}

func (s *Stack) Pop() string {
    if s.IsEmpty() {
        return ""
    }
    top := len(*s) - 1
    item := (*s)[top]
    *s = (*s)[:top]
    return item
}

func (s *Stack) Push(item string) {
    *s = append(*s, item)
}


func isValid(s string) bool {
    if (len(s) & 1) == 1 {
        return false
    }

    bracketPairs := map[string]string {
        "]": "[",
        "}": "{",
        ")": "(",
    }
    
    stack := Stack{}
    
    for _, char := range s {
        c := string(char)
        if c == "[" || c == "{" || c == "(" {
            stack.Push(c)
            continue
        }
        if stack.Pop() != bracketPairs[c] {
            return false
        }
    }
    
    return stack.IsEmpty()
}