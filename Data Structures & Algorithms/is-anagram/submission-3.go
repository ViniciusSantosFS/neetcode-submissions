/*

if len(s) != len(t) return false
s = "racecar", t = "carrace"

sMap = {
r: 2,
a: 2,
c: 2,
e: 1,
}

tMap = {
r: 2,
a: 2,
c: 2,
e: 1,
}

for i range t
	if (sMap[t[i]] != tMap[t[i]]) return false


Runtime O(n)
Space O(n)
*/

func isAnagram(s string, t string) bool {
	if (len(s) != len(t)) {
		return false
	}
	sMap := make(map[byte]int)
	tMap := make(map[byte]int)

	for i := range s {
		sMap[s[i]]++
		tMap[t[i]]++
	}
	
	for i := range t {
		if (tMap[t[i]] != sMap[t[i]]) {
			return false
		}
	}
	
	return true
}
