class Solution {
    fun topKFrequent(nums: IntArray, k: Int): IntArray {
        val frequencyCounterMap = HashMap<Int, Int>()

        nums.forEach {
            frequencyCounterMap[it] = (frequencyCounterMap[it] ?: 0) + 1
        }
        
        // Run time O(nlogn)
        // Memory O(n)
        return frequencyCounterMap.keys
        .sortedByDescending { frequencyCounterMap[it] }
        .take(k)
        .toIntArray()
    }
}
