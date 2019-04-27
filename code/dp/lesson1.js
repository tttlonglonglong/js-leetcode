/**
 * 63. 不同路径 II
 * 原题链接：https://leetcode-cn.com/problems/unique-paths-ii/
 *
 */

export default (arr, m, n) => {
  let dp = (m, n) => {
    if (m === 2 && n == 2) {
      // 边界.m=2,n=2
      return arr[1][1] === 1 || arr[1][0] + arr[0][1] === 2 ? 0 : arr[1][0] === 1 || arr[0][1] === 1 ? 1 : 2
    } else if (m < 2 || n < 2) {
      // 单行或者单列的情况
      if (m < 2) {
        // 单行中间不能又任何障碍物
        // 单行有障碍物就返回 0，没有障碍物 就返回 1
        return arr[m - 1].includes(1) ? 0 : 1
      } else {
        // 单列中不能有障碍物
        for (let i = 0; i < m; i++) {
          if (arr[i][0] === 1) {
            return 0
          }
        }
        return 1
      }
    } else {
      return dp(m - 1, n) + dp(m, n - 1)
    }
  }
  return dp(m, n)
}
