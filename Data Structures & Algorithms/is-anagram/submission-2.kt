class Solution {
    fun isAnagram(s: String, t: String): Boolean {
        if (s.length != t.length) return false
        val sIndexTracker = Array<Int>(26) { 0 }
        val tIndexTracker = Array<Int>(26) { 0 }
        
        s.forEachIndexed { index, it ->
            val sIndex = it.code - 'a'.code
            val tIndex = t[index].code - 'a'.code
            sIndexTracker[sIndex]++
            tIndexTracker[tIndex]++
        }

        // Run time O(n + m)
        // Memory O(1)
        return sIndexTracker.contentEquals(tIndexTracker)
    }
}
