class Solution {
    fun longestConsecutive(nums: IntArray): Int {
        var longestSequence = 0
        val numsSet = nums.toSet()

        nums.forEach {
            var sequenceTracker = it
            var sequenceCounter = 0

            while (it -1 !in numsSet && sequenceTracker in numsSet) {
                sequenceCounter++
                sequenceTracker++
            }
            longestSequence = max(longestSequence, sequenceCounter)
        }

        // Space O(n)
        // RunTime O(n)
        return longestSequence
    }
}
