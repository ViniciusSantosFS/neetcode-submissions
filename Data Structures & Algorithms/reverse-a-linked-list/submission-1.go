/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }


s
         h
              t
nil -><- 0 <- 1 <- 2 <- 3


*/

func reverseList(head *ListNode) *ListNode {
	var slow *ListNode
	for head != nil {
		tmp := head.Next
		head.Next = slow
		slow = head
		head = tmp
	}
	return slow
}
