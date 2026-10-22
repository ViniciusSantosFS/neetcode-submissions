/**
 * s = [
 * s = [
 *
 *  arr = [[, (, {, [, ],] 
 * 
 *  set = {
 *  {
 *  }
 * 
 *  char => [
 *  item => ]
 */

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = []
        const map = {
            '{': '}',
            '[': ']',
            '(': ')'
        }

        for (const char of s) {
           if (map[char] !== undefined) {
                stack.push(char)
           } else {
            const item = stack.pop()
            if (map[item] !== char) {
                console.log(map[char])
                console.log(item)
                return false
            }
           }
        }

        return stack.length <= 0
    }
}
