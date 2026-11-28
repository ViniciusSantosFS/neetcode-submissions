/*
""
"a"

"z x y l x y Z"

longestSequenceCounter = 0

hashSet = { y, l, x, y, Z }

for right := range len(s) {
	while (hashSet.has(char)) {
		left := right - hasSet.size
		hashSet.remove(s[left])
	}
	hashSet.add(char)
	longestSequenceCounter = math.max(longestSequenceCounter, hasSet.size)
}

Run time O(n)
Space O(n)
*/
func lengthOfLongestSubstring(s string) int {
	if (len(s) <= 0) {
		return 0
	}

	longestSequenceCounter := 0.0
	hashMap := make(map[byte]byte)
	
	for right := range len(s) {
		char := s[right]
		for hashMap[char] == char {
			left := right - len(hashMap)
			delete(hashMap, s[left])
		}
		hashMap[char] = char
		longestSequenceCounter = math.Max(longestSequenceCounter, float64(len(hashMap)))
	}
	return int(longestSequenceCounter)
}
