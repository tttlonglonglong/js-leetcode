/**
 *  89. 格雷编码
 * 链接：https://leetcode-cn.com/problems/gray-code/
 */
export default n => {
  // 递归函数，用来算输入为n 的格雷编码序列
  let make = n => {
    if (n === 0) {
      return ['0']
    } else if (n === 1) {
      return ['0', '1']
    } else {
      // 先算n-1的格雷编码序列
      let prev = make(n - 1)
      let result = []
      // 格雷编码的总长度
      let max = Math.pow(2, n) - 1
      for (let i = 0, len = prev.length; i < len; i++) {
        // 都是对称的，只是前面加一个 0 或者 1
        result[i] = `0${prev[i]}`
        result[max - i] = `1${prev[i]}`
      }
      return result
    }
  }
  return make(n)
}
