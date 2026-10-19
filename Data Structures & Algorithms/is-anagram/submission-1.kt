class Solution {
    fun isAnagram(s: String, t: String): Boolean {
        if (s.length != t.length) return false

        val sMap = HashMap<Char, Int>()
        s.forEach {  sMap[it] = (sMap[it] ?: 0) + 1 }
        t.forEach {
            if ((sMap[it] ?: 0) > 0) {
                sMap[it] = sMap[it]!! -1
            } else {
                return false
            }
        }
        return true
    }
}
