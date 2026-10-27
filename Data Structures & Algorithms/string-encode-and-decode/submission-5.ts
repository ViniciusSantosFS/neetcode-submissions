class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     * time O(n)
     * space O(n)
     */
    encode(strs: string[]): string {
        let result = ""
        for (const str of strs) {
            result += `${str.length}#${str}`
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     * Time O(n + m)
     * Space O(n)
     */
    decode(str: string): string[] {
        const result: string[] = []
        for (let i = 0; i < str.length; i++) {
            let j = i
            while (str[j] !== "#") { j++ }
            const strLength = parseInt(str.substring(i, j))
            const word = str.substring(j + 1, j + strLength + 1)
            result.push(word)
            i = j + strLength
        }
        return result
    }
}
