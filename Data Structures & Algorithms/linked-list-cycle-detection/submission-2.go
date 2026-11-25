/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }

			   tail
     head
 1 -> 2 -> 3 -> 4 -> 1 -> 2 -> 3 -> ...

 */

func hasCycle(head *ListNode) bool {
	if (head == nil) {
		return false
	}
    tail := head

	for tail.Next != nil && tail.Next.Next != nil {
		tail = tail.Next.Next
		head = head.Next
		if (head == tail) {
			return true
		}
	}

	return false
}
