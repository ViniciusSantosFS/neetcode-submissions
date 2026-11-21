/**
 * [-1,0,1]
 * [-1,0,1,2,-1,-4,0,0]
 * 
 * {-1: 0, 0: 1, 1: 2, ...}
 * 
 * -1 + 0 + x = 0
 * x = 0 + 1 - 0
 * x = 1
 * 
 * for (let i = 0; i < nums.length; i++) {
 *      const numI = nums[i]
 *      for (let j = i + 1; j < nums.length; j++) {
 *         const numJ = nums[j]
 *         const missing = 0 + (numI * -1) + (numJ * -1)
 *         if (map.has(missing)) {
 *            const missingIndex = map.get(missing)
 *            if (missingIndex === i || missingIndex === j) continue
 *            set.add([missing, numI, numJ]) // sort + string converted
 *         }
 *      }
 * }
 * return set.array
 * 
 * Space O(nˆ2)
 * Run time O(nˆ2)
 */
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const map = new Map()
        const result = new Set<string>()
        nums.forEach((num, i) => {map.set(num, i)})

        for (let i = 0; i < nums.length; i++) {
            const numI = nums[i]
            for (let j = i + 1; j < nums.length; j++) {
                const numJ = nums[j]
                const missing = (numI * -1) + (numJ * -1)
                if (map.has(missing)) {
                    const missingIndex = map.get(missing)
                    if (missingIndex === i || missingIndex === j) continue
                    result.add([missing, numI, numJ].sort((a, b) => a - b).toString())
                }
            }
        }

        return [...result].map((arrayString) => arrayString.split(",").map(Number))
    }
}
