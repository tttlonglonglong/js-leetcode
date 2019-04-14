/**
 * 30. 串联所有单词的子串
 *原题链接：https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
 */
export default (str, words) => {
  // 保存结果
  let result = []
  // 记录数组的长度，做边界计算
  let num = words.length
  // 递归函数体
  let range = (r, _arr) => {
    if (r.length === num) {
      result.push(r)
    } else {
      _arr.forEach((item, idx) => {
        // concat 把数组拷贝出来，不是引用
        let tmp = [].concat(_arr)
        tmp.splice(idx, 1)
        range(r.concat(item), tmp)
      })
    }
  }
  range([], words)
  // [0,9,-1],filter 之后 [0,9]
  return result
    .map(item => {
      return str.indexOf(item.join(''))
    })
    .filter(item => item != -1)
    .sort()
  // return r
}
