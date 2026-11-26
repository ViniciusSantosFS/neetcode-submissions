/*
target = 0
a + b = target
-1 + b = 0
b = 0 + 1
b = 1

 0    1   2  3  4   5   6  7
[50, -1, 20, 3, 10, -1, 2, 1]

map = {50: 0, -1: 1, 20: 2, ...}


for i := range nums {
	missing = target - nums[i]
	if (map[missing]) return [map[missing], nums[i]]
	map[nums[i]] = i
}

*/
func twoSum(nums []int, target int) []int {
    hashMap := make(map[int]int)

	for i := range nums {
		missing := target - nums[i]
		if _, exist := hashMap[missing]; exist {
			return []int{hashMap[missing], i}
		}
		hashMap[nums[i]] = i
	}
	return nil
}
