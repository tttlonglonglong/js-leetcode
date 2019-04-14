/**
 * 41. 缺失的第一个正数
 * https://leetcode-cn.com/problems/first-missing-positive/
 */
// 不是最优解
// export default arr => {
//   // 过滤掉非正整数
//   arr = arr.filter(item => item > 0)
//   // 正整数数组是不是为空
//   if (arr.length) {
//     // 默认升序
//     arr.sort()
//     //如果第一个元素不为1 正整数就是1
//     if (arr[0] !== 1) {
//       return 1
//     } else {
//       // 第一个是1 ,从左边第一个元素开始遍历，只要下一个元素和当前元素差值 > 1 说明当前元素的下一个值(+1)
//       for (let i = 0, len = arr.length - 1; i < len; i++) {
//         if (arr[i + 1] - arr[i] > 1) {
//           return arr[i] + 1
//         }
//       }
//       // 遍历之后都是连续的正整数[1,2,3,4,5]，最后一个元素+1
//       return arr.pop() + 1
//     }
//   } else {
//     return 1
//   }
// }
export default arr => {
  arr = arr.filter(item => item > 0)
  // 实现选择排序，先拿到最小值，如果第一个元素不是1直接返回1，如果是1，就要比相邻元素的值
  for (let i = 0, len = arr.length; i < len; i++) {
    min = arr[i]
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        let c = min
        min = arr[j]
        arr[j] = c
      }
    }
    arr[i] = min
    if (i > 0) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i - 1] + 1
      }
    } else {
      // i = 0 的时候，第一个元素不是1 ，直接1 就是最小正整数
      if (min !== 1) {
        return 1
      }
    }
  }
  // 数组是连续的，排序后的最后一位+1
  return arr.length ? arr.pop() : 1
}
