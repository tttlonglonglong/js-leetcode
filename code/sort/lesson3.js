/**
 * 922. 按奇偶排序数组 II
 * https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 */
export default arr => {
  // 进行排序，升序排序
  arr.sort((a, b) => a - b)
  // 声明一个空数组用来存储奇偶排序后的数组
  let r = []
  // 记录奇数、偶数位的下标
  let odd = 1
  let even = 0
  // 对数组进行遍历
  arr.forEach(item => {
    if (item % 2) {
      r[odd] = item
      odd += 2
    } else {
      r[even] = item
      even += 2
    }
  })
  return r
}
