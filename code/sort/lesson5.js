/**
 * 215. 数组中的第K个最大元素
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 */
// 不是最优解
// export default (arr, k) => {
//   // 先对数组进行降序排序
//   return arr.sort((a, b) => b - a)[k - 1]
// }

export default (arr, k) => {
  // 记录数组的索引
  let len = arr.length - 1
  // 只遍历k次
  for (let i = len, tmp; i > len - k; i--) {
    console.log('i', i)
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log('arr[j] > arr[j + 1]', arr[j], arr[j + 1])
        tmp = arr[j]
        // 因为是j < i 这里需要j+1
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  // 返回最大的第k个值(arr[len+1-k])
  console.log('arr[len - (k - 1)]', arr, arr[len - (k - 1)])
  return arr[len - (k - 1)]
}
