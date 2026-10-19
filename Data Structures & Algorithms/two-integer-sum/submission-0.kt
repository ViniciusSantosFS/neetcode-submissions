/*

5 + x = 10
x = 10 - 5
*/

class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val pastNumIndexesMap = HashMap<Int, Int>()

        nums.forEachIndexed { index, it ->
            val missingToTarget = target - it
            if (pastNumIndexesMap.containsKey(missingToTarget)) {
                val missingIndex = pastNumIndexesMap[missingToTarget]!!
                return intArrayOf(missingIndex, index)
            }
            pastNumIndexesMap[it] = index
        }
        return intArrayOf()
    }
}
