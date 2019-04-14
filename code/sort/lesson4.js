/**
 * 164. 最大间距
 * https://leetcode-cn.com/problems/maximum-gap/
 */
// 不是最优解，排序之后又遍历了一遍
// export default arr => {
//   // 数组长度小于2 返回0
//   if (arr.length < 2) {
//     return 0
//   }
//   arr.sort()
//   // 用它来保存相邻元素的差值
//   let max = 0
//   for (let i = 0, len = arr.length - 1, tmp; i < len; i++) {
//     tmp = arr[i + 1] - arr[i]
//     if (tmp > max) {
//       max = tmp
//     }
//   }
//   return max
// }
export default arr => {
  if (arr.length < 2) {
    return 0
  }
  let max = 0
  let len = arr.length - 1
  // 记录相邻元素的差值
  let space
  for (let i = len, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      tmp = arr[j]
      if (tmp > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
    // 排出俩个数之后，就可以开始比较了
    if (i < len) {
      space = arr[i + 1] - arr[i]
      if (space > max) {
        max = space
      }
    }
  }
  return Math.max(max, arr[1] - arr[0])
}
