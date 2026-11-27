/*
[""]
["bat","bag","","AAAAAAAAAAAA"]
["bat","bag","bank","band"]

bat
bag
bank
band

min_length = 3

for i < min_length {
	for str of strs {
		if (str[i] != strs[0][i]) {
			return str[:i]
		}
	}
}
return [:i]
*/
func longestCommonPrefix(strs []string) string {
    minLength := math.MaxInt

	for i := range len(strs) {
		if (len(strs[i]) < minLength) {
			minLength = len(strs[i])
		}
	}

	i := 0
	for i < minLength {
		for j := range len(strs) {
			if (strs[j][i] != strs[0][i]) {
				return strs[0][:i]
			}
		}
		i++
	}

	return strs[0][:i]
}
