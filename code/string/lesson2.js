/**
 * letcode： 696  计算具有相同数量0和1的非空(连续)子字符串的数量
 * @param {string} s
 * @return {string}
 */
export default str => {
  // 建立数据结构，堆栈
  let r = []
  // 给定任意子输入的 都返回第一个符合条件的子串不关心从哪个位置开始找
  let match = str => {
    // 取到第一个开始的0或1 的连续数字
    let j = str.match(/^(0+|1+)/)[0]
    // 位运算取反,获取相同的子字符串， repeat生成相同长度的字符串
    let o = (j[0] ^ 1).toString().repeat(j.length)
    // 正则： /xxx/： xxx无法使用变量，使用正则对象才可以
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      // 获取第一个匹配到的子串，也可能匹配到的不是第一个
      return RegExp.$1
    } else {
      return ''
    }
  }

  // 通过for循环控制程序运行的流程
  for (let i = 0, len = str.length - 1; i < len; i++) {
    // 从第一位开始，截取到最后一位的子串
    let sub = match(str.slice(i))
    if (sub) {
      r.push(sub)
    }
  }
  return r
}
