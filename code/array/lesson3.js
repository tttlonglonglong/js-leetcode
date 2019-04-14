/**
 *  605. 种花问题
 * 链接：https://leetcode-cn.com/problems/can-place-flowers/
 */
export default (arr, n) => {
  // 计数器：最多能种几朵花
  let max = 0
  for (let i = 0, len = arr.length; i < len; i++) {
    // 当 i = 0 的时候，判断左右俩边
    if (arr[i] === 0) {
      // 左边界
      if ((i === 0 && arr[1] === 0) || (i === len - 1 && arr[len - 2] === 0)) {
        max++
        i++
      } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
        // 正常的判断左右俩边
        max++
        i++
      }
    }
  }
  console.log('max,n', max, n)
  return max >= n
}
