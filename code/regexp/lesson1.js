/**
 * 459. 重复的子字符串
 * https://leetcode-cn.com/problems/repeated-substring-pattern/
 */
export default str => {
  // 正则的模式匹配
  var reg = /^(\w+)\1+$/
  return reg.test(str)
}
