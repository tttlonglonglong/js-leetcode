/**
 * 10. 正则表达式匹配
 * https://leetcode-cn.com/problems/regular-expression-matching/
 */
export default (str, mode) => {
  // 对模式变量进行正则筛选
  // 最关键的一步
  let modeArr = mode.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$))/g)
  console.log('modeArr', modeArr)
  let cur = 0
  let strLen = str.length
  for (let i = 0, len = modeArr.length, m; i < len; i++) {
    // 把每一个匹配到的字符串，变成数组；
    //模式分为三类：.*|a*|cdef
    m = modeArr[i].split('')
    // 如果第二位是* 表示是有模式的
    if (m[1] === '*') {
      if (m[0] === '.') {
        // * 的时候肯定一样
        // cur = strLen // 源代码这里是错的
        console.log('modeArr[i].length', cur, modeArr[i].length)
        cur += modeArr[i].length - 1
        // break
      } else {
        while (str[cur] === m[0]) {
          // cur++ // 源代码这里是错的
          cur += modeArr[i].length - 1
          // console.log('cur---->', cur)
        }
      }
    } else {
      for (let j = 0, jl = m.length; j < jl; j++) {
        if (m[j] !== str[cur]) {
          return false
        } else {
          cur++
          // console.log('cur---->', cur)
        }
      }
    }
  }
  return cur === strLen
}
