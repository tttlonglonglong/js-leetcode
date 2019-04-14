/**
 * 85. 最大矩形
 *原题链接：https://leetcode-cn.com/problems/maximal-rectangle/
 */
export default arr => {
  // 保存结果
  let result = []
  // 正则提取字符串中的1,至少2个1以上
  let reg = /1{2,}/g
  // 把二维数组重新表达， 把连续的1提取出来(起始点，截止点)
  arr = arr.map((item, index) => {
    let str = item.join('')
    let r = reg.exec(str) // exec:匹配到当前的索引，索引的内容，模式
    // rs 匹配到的临时结果
    let rs = []
    // console.log('正则匹配的结果', r, item, index)
    while (r) {
      // 连续的1 起始点：匹配到的索引，结束点： 起始点 + 匹配到的长度 -1
      rs.push([r.index, r.index + r[0].length - 1])
      r = reg.exec(str) // exec只匹配一次
    }
    return rs
  })
  console.log('arr处理后的结果', arr)
  // 通过递归计算相邻的矩阵，直到没有交叉点
  // arr: 二维数组， result：上一次的结果，n：是几行合并的结果(n乘以合并后的1的长度就是矩形面积)
  let maxRect = (arr, result, n = 1) => {
    // 弹出堆栈最上面的俩个
    let top = arr.pop() // 弹出第一行
    let next = arr.pop() // 弹出第二行
    //记录堆栈最上面俩个元素的起始截止点
    let tt // 记录第一行的每一个起始点和截止点
    let nn // 记录第二行的每一个起始点和截止点
    // 记录交叉点的起始位置
    let start // 记录交叉点的起始索引
    let end // 记录交叉点的截止索引
    let width = 1 // 相邻行交叉点的宽度
    let maxWidth = 1 // 记录相邻行最大的交叉点的宽度
    n++
    // console.log('maxRect接收的数组', arr, result)
    for (let i = 0, il = top.length; i < il; i++) {
      tt = top[i]
      for (let j = 0, jl = next.length; j < jl; j++) {
        nn = next[j]
        // 算相邻行的交集：起始索引的最大值，截止索引的最小值
        // 截止索引的最小值 - 起始索引的最大值
        width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0])
        // 找出俩行合并之后的最大宽度
        if (width > maxWidth) {
          console.log('maxWidth, width', maxWidth, width)
          maxWidth = width
          start = Math.max(tt[0], nn[0])
          end = Math.min(tt[1], nn[1])
        }
      }
    }
    // 判断是否有交叉点
    // console.log('start, end', start, end, n)
    if (start === undefined || end === undefined) {
      // 弹出了俩行还没有交叉点
      if (n < 3) {
        return false
      } else {
        // 如果大于3 至少有已经比较了俩行
        // 俩行的位置
        width = top[0][1] - top[0][0] + 1
        if (width > 1) {
          // width > 1 说明是矩形
          // n = 3是时候，是处理了俩行
          result.push((n - 1) * width)
        }
      }
    } else {
      arr.push([[start, end]])
      maxRect(arr, result, n++)
    }
  }
  // console.log('遍历后的数组', arr)
  while (arr.length > 1) {
    maxRect([].concat(arr), result)
    arr.pop()
  }
  console.log('最后获取的结果', result)
  // 取最大值
  let max = 0
  let item = result.pop()
  while (item) {
    if (item > max) {
      max = item
    }
    item = result.pop()
  }
  return max > 0 ? max : 1
}
