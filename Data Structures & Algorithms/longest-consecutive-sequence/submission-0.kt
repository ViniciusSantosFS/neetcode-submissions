/*
set = {1}
[1]

nums.forEach {
    counter = it
    sequence = 0
    while (!set.has(it -1) && set.has(counter++)) {
        sequence++
    }
    longestSequence = max(longestSequence, sequence)
}

*/

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

        return longestSequence
    }
}
