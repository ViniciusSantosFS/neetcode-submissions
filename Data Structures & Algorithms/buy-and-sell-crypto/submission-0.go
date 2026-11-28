/*
[1]

[7,1,5,3,6,4]

bestProfit = 7 - 1 => 6
minPrice = 1

bestProfit = 0
minPrice;
for stock in prices {
	bestProfit = math.Max(bestProfit, stock - minPrice)
	minPrice = math.Min(minPrice, stock)
}

Run time O(n)
space O(1)
*/
func maxProfit(prices []int) int {
	if (len(prices) <= 1) {
		return 0
	}
	
	bestProfit := 0.0
	minPrice := math.Inf(1)

	for i := range len(prices) {
		bestProfit = math.Max(bestProfit, float64(prices[i]) - minPrice)
		minPrice = math.Min(minPrice, float64(prices[i]))
	}
	return int(bestProfit)
}
