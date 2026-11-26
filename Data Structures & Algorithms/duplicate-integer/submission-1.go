/*
nums.size != set(nums).size

Space O(n)
Run time O(n)
*/
func hasDuplicate(nums []int) bool {
	hashMap := make(map[int]int)

	for i := range nums {
		hashMap[nums[i]] = nums[i]
	}

    return len(hashMap) != len(nums)
}
