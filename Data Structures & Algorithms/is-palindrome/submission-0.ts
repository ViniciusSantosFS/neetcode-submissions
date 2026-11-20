/**
 * - case insentivie (W === w)
 * - care only about letters + numbers
 * 
 * this is a test
 * p1
 *              p2
 * 
 * 
 * while (p1 < p2) {
 *      while (p1 !== char or number && p1 < p2) p1++
 *      while (p2 !== char or number && p1 < p2) p2--
 *      if (p1.lowerCase !== p2.lowerCase) return false
 * }
 * return true
 * 
 * Run time complexity O(n)
 * Space complexity O(1)
 */
class Solution {
    private isAValidChar(char: string): boolean {
        return /[a-z|A-z|0-9]/.test(char)
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let p1 = 0
        let p2 = s.length -1
        
        while (p1 < p2) {
            while (!this.isAValidChar(s[p1]) && p1 < p2) p1++
            while (!this.isAValidChar(s[p2]) && p1 < p2) p2--
            
            if (s[p1].toLowerCase() !== s[p2].toLowerCase()) return false
            p1++
            p2--
        }

        return true
    }
}
