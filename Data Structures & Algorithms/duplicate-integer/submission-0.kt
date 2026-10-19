class Solution {
    fun hasDuplicate(nums: IntArray): Boolean {
        val numsSet = mutableSetOf<Int>()
        nums.forEach {
            if (it in numsSet) {
                return true
            }
            numsSet.add(it)
        }
        return false
    }
}
