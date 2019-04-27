/**
 * 48. 旋转图像
 * 原题链接：https://leetcode-cn.com/problems/rotate-image/
 *
 */

export default arr => {
  // 获取n的纬度，是n*n 的正方形
  let vecor = arr.length
  // //以 中心线 上下垂直翻转
  for (let i = 0, len = vecor / 2; i < len; i++) {
    for (let j = 0, tmp; j < vecor; j++) {
      // 交换每一行的每一个元素
      tmp = arr[i][j]
      arr[i][j] = arr[vecor - i - 1][j]
      arr[vecor - i - 1][j] = tmp
    }
  }
  //对角线 翻转
  for (let i = 0; i < vecor; i++) {
    // 因为是  n × n 的矩阵，j<i 就是对角线左边
    for (let j = 0, tmp; j < i; j++) {
      tmp = arr[i][j]
      // 对角线交换 就是 行号和列号 交换一下就可以了
      arr[i][j] = arr[j][i]
      arr[j][i] = tmp
    }
  }
  return arr
}
