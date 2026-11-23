/**
 * maxArea = 0
 * 
 * 
 * 5 - 1 = 4 -> width
 * min(7, 1) -> height
 * height * width => result
 * 
 * 
 * [0, 1, 5, 2, 4, 4, 8, 7]
 *  l
 *                       r
 * maxWidth -> distance between l to r
 * width = r - l
 * 
 * height = min(heigths[l], heigths[r]) -> knowing that width will always drecease we must to keep track of the max possible height
 * 
 */

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxArea = 0
        let left = 0
        let right = heights.length -1

        while (left < right) {
            const width = right - left
            const height = Math.min(heights[left], heights[right])
            maxArea = Math.max(maxArea, width * height)
            heights[left] > heights[right] ? right-- : left++
        }

        return maxArea
    }
}
