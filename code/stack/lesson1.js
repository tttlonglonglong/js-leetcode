/**
 * 682. 棒球比赛
 *原题链接：https://leetcode-cn.com/problems/baseball-game/
 */
export default arr => {
  // 用数组来实现堆栈的数据结构,pop, push
  let result = []
  // 上一轮的数据
  let pre1
  // 上上轮的数据
  let pre2
  // 对数组进行遍历，遍历的目的是处理得分
  arr.forEach(item => {
    switch (item) {
      case 'C':
        if (result.length) {
          // 最后一个得分无效，移除
          result.pop()
        }
        break
      case 'D':
        // 上一轮有得分的俩倍
        pre1 = result.pop()
        result.push(pre1, pre1 * 2)
        break
      case '+':
        // 前两轮有效 回合得分
        pre1 = result.pop()
        pre2 = result.pop()
        // 先拿出来的要后放
        result.push(pre2, pre1, pre1 + pre2)
        break
      default:
        result.push(item * 1)
    }
  })
  // reducer 累积求和
  return result.reduce((total, num) => {
    return total + num
  })
}
