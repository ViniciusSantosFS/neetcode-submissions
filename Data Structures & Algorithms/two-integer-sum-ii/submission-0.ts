/**
 * 
 * [2, 3, 5, 10, 20, 50]
 *     p1
 *           p2
 * target = 15
 * 
 * 
 * 
 * Space Complexity O(1)
 * Run time Complexity O(n)
 */
class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let p1 = 0
        let p2 = numbers.length -1

        while (p1 < p2) {
            const result = numbers[p1] + numbers[p2]
            if (result > target) p2--
            else if (result < target) p1++
            else return [p1 + 1, p2 + 1]
            
        }
        return []
    }
}
