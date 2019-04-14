/**
 * 93. 复原IP地址
 *原题链接：https://leetcode-cn.com/problems/restore-ip-addresses/
 */
export default str => {
  // 保存所有符合条件的ip
  let r = []
  // 递归函数:cur:上一次的处理结果，sub：剩余的字符串
  let search = (cur, sub) => {
    // 最后处理的长度是不是等于4，调出来的字符串的长度等于原字符串
    if (cur.length === 4 && cur.join('') === str) {
      r.push(cur.join('.'))
    } else {
      // 字符串最多取3位
      for (let i = 0, len = Math.min(3, sub.length), tmp; i < 3; i++) {
        tmp = sub.substr(0, i + 1)
        if (tmp < 256) {
          console.log('tmp, sub.substr(i + 1)', tmp, sub.substr(i + 1))
          search(cur.concat(tmp), sub.substr(i + 1))
        }
      }
    }
  }
  search([], str)
  console.log('search([], str)', search([], str))
  return r
}
