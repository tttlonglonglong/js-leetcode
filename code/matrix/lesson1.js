/**
 * 54. 螺旋矩阵
 * 原题链接：https://leetcode-cn.com/problems/spiral-matrix/
 *
 */

export default arr => {
  // 处理每一圈的数据遍历过程
  let map = (arr, r = []) => {
    // 先从上至下遍历，再从下至上遍历
    for (let i = 0, len = arr.length; i < len; i++) {
      if (i === 0) {
        // 第一行直接拿过来
        r = r.concat(arr[i])
      } else if (i === len - 1) {
        // 最后一行反转拿过来
        r = r.concat(arr[i].reverse())
      } else {
        // 不是第一行也不是最后一行的时候，取最后一个数
        r.push(arr[i].pop())
      }
    }
    // 遍历完之后，弹出第一行和最后一行
    arr.shift()
    arr.pop()
    // 已经弹出了俩行,从下至上进行遍历
    for (let i = 0, len = arr.length - 1; i > 0; i--) {
      r.push(arr[i].shift())
    }
    // 遍历之后还有元素，进行递归的遍历下一圈
    if (arr.length) {
      return map(arr, r)
    } else {
      console.log('r', r)
      // 没有了，返回最后的结果
      return r
    }
  }
  return map(arr, [])
}
