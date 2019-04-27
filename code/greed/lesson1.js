/*
 * 122. 买卖股票的最佳时机 II
 * 原题链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 */

export default prices => {
  // 保存现在的利润
  let count = 0
  // 对所有的价格进行遍历
  for (let i = 0, len = prices.length; i < prices.length; i++) {
    // 判断下一天的价格，比当前的价格是不是高，高的话，意味着现在可以买了
    // j 要算 的下一个，所以在len-1
    for (let j = i; j < len - 1; j++) {
      if (prices[j + 1] > prices[j]) {
        // 上涨趋势，上涨不卖
        count += prices[j + 1] - prices[j]
        i = j // 计算下一次的利润，用j点的价格算(因为上面已经算过，j->j+1的利润了)
      } else {
        // 下一个点比这个点低，会跌，这里要卖出
        i = j
        break // 等待下一次的买卖的机会
      }
    }
  }
  return count
}
