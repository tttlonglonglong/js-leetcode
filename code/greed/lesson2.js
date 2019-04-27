/*
 * 860. 柠檬水找零
 * 原题链接：https://leetcode-cn.com/problems/lemonade-change/
 */

export default input => {
  // 表示自己的钱箱(用于存储零钱)
  let hand = []
  // 判断是否顾客还有
  while (input.length) {
    // 取出当前排在最前面的顾客的钱，判断是否要找零钱
    let money = input.shift()
    if (money === 5) {
      // 不需要找零钱，直接存起来
      hand.push(money)
    } else {
      // 将手里的钱降序排列,最大面值的钱，放在最前面
      hand.sort((a, b) => b - a)
      // 需要找零钱的时候，算到底要找多少钱
      // 顾客的钱 - 饮料的零钱
      let change = money - 5
      for (let i = 0, len = hand.length; i < len; i++) {
        // 先给 小于change的 最大的票
        if (hand[i] <= change) {
          change -= hand[i]
          hand.splice(i, 1)
          // 删除了元素，数组的长度发生了变化，要维持刚才的 i 不变
          i--
        }
        if (change === 0) {
          // 需要找的零钱是 0，说明找开了，跳出for 循环
          break
        }
      }
      // 所有的零钱遍历完之后，change != 0，说明找不开了
      if (change !== 0) {
        return false
      } else {
        // 找开了，把这个顾客的钱存起来
        hand.push(money)
      }
    }
  }

  //默认return true
  return true
}
