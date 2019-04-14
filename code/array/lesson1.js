/**
 * 17. 电话号码的字母组合
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */
export default str => {
  // 1. 建立电话号码键盘的映射
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 2. 把输入的字符串按单字符分割变成数组
  let num = str.split('')
  //3.保存键盘映射后的字幕内容，如 23 =>['abc','def']
  let code = []
  // 把按键对应的数组映射找出来
  num.forEach(item => {
    if (map[item]) {
      // 存储数字按键 对应的字母
      code.push(map[item])
    }
  })
  let comb = arr => {
    // 临时变量用来保存前俩个组合的结果
    let tmp = []
    // 最外层的循环是遍历第一个元素,里层的循环是遍历第二个元素
    for (let i = 0, il = arr[0].length; i < il; il++) {
      for (let j = 0, jl = arr[1].length; j < jl; jl++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    // 最关键的一步：将组合出来的新数组 替换掉 已经组合完毕了俩个旧元素
    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    // 可能传进来的数组 只有一个，上面的for循环，只能循环一层，temp是空
    return arr[0]
  }
  return comb(code)
}
