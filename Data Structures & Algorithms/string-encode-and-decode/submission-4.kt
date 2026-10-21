/*
["This", "%$#", "is", "a09)()_-possible", "!@!~input"]

4#This3#%s#2#is

["Hello","World"]

5#hello5#world

val result = []
var i = 0

while (i < str.length) {
    var j = i
    while (j != "#") j++
    val wordSize = str[j -1].toInt()
    val word = str.substring(j + 1, j + 1 + wordSize)
    result.push = word
    i = j + 1 + wordSize
}

Enconde
Run time O(n)
Space O(n)


Decode
Run time O(n + m)
Space O(n)
*/
class Solution {

    fun encode(strs: List<String>): String {
        var result = ""
        strs.forEach {
            result += "${it.length}#${it}"
        }
        return result
    }

    fun decode(str: String): List<String> {
        val result = mutableListOf<String>()
        var i = 0

        while (i < str.length) {
            var j = i
            while (str[j] != '#') j++
            val wordSize = str.substring(i, j).toInt()
            val word = str.substring(j + 1, j + 1 + wordSize)
            result.add(word)
            i = j + 1 + wordSize
        }
        return result
    }
}
