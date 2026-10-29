/**
 * "({[]})" -> valid
 * 
 * "(" -> invalid, "]", "{"
 * 
 * "({)}" -> valid
 * 
 * ({)}[}] -> invalid
 * 
 * ( ) { } [ ] {
 * 
 * ([{}])
 * 
 * [(, [, ]
 * 
 * { (: ), [: ], {: }  }
 * 
 * map[{] -> } !== char return false
 * 
 * return true
 * 
 * Space O(n)
 * Memory O(n)
 */
class Solution {

    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const map = new Map([['(', ')'], ['{', '}'], ['[', ']']])
        const stack: string[] = []
        
        for (const char of s) {
            if (map.has(char)) {
                stack.push(char)
            } else {
                const key = stack.pop()
                if (map.get(key) !== char) return false
            }
        }
        return stack.length <= 0
    }

}
