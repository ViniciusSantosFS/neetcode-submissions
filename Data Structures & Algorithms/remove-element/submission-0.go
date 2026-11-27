/*
val=0 , [0] -> 0

val = 3
           -
		   -
[0,1,2,2,2,0,nil,nil]

swapCounter = 0
left = 0
right = arr.length -1

while left < right:
	if (num[left] != val && num[right] != val):
		left++
	if (right == val):
		num[right] = nil
		right--
		swapCounter++
	else if (left == val):
		num[left] = nil
		tmp = num[right]
		num[right] = num[left]
		num[left] = tmp
		left++
		right--
		swapCounter++

Run time O(n)
Space O(1)
*/
func removeElement(nums []int, val int) int {
	left := 0
	right := len(nums) -1
	swapCounter := 0

	for left <= right {
		switch true {
			case nums[left] != val && nums[right] != val:
				left++
			case nums[right] == val:
				right--
				swapCounter++
			case nums[left] == val:
				tmp := nums[right]
				nums[right] = nums[left]
				nums[left] = tmp
				left++
				right--
				swapCounter++
		}
	}

    return len(nums) - swapCounter
}
