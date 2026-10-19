/*
get the char code hash if we have the key, save it else add it
act, cat
1#1#1#0#1: []

*/

class Solution {
    fun groupAnagrams(strs: Array<String>): List<List<String>> {
        val groupedAnagramsMap = HashMap<String, MutableList<String>>()
        
        strs.forEach {
            val hash = getStringHash(it)
            if (groupedAnagramsMap[hash] != null) {
                groupedAnagramsMap[hash]!!.add(it)
            } else {
                groupedAnagramsMap[hash] = mutableListOf(it)
            }
        }

        return groupedAnagramsMap.values.toList()
    }

    private fun getStringHash(str: String): String {
        val indexesTracker = Array(26) { 0 }
        str.forEach { 
            val index = it.code - 'a'.code
            indexesTracker[index]++
        }
        return indexesTracker.joinToString("#")
    }
}
