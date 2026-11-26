/*
[1]
[1, 1]

 0  1  2  3  4  5  
[22,21,20,1,22,21,...]
2 + 4

result[nums * 2]

for i; i < nums; i++
	result[i + len(nums)] = nums[i]

*/
func getConcatenation(nums []int) []int {
    ans := make([]int, len(nums) * 2)
	copy(ans, nums)
	for i := range(nums) {
		ans[i + len(nums)] = nums[i]
	}
	return ans
}
