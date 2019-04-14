/**
 * 914. 卡牌分组
 *
 */
export default arr => {
  // 1. 对这幅牌进行排序，升序，降序都可以，是为了让相同的数字，紧密连在一起
  arr.sort((a, b) => a - b)
  // console.log('arr---->', arr)
  // 2. 定义自个最小值(js中能存储的最大的数值)
  let min = Number.MAX_SAFE_INTEGER
  let dst = [] // 保存所有分组的存储空间
  // 最终的结果，一开始这副牌是不是满足所有的结果
  let result = true
  // for循环的，第一个语句只会执行一次，变量i是let声明的，当前的i只在本轮循环有效
  // 如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？
  // 这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。
  for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
    //分组,tmp 存值相同的变量(一组)
    tmp.push(arr[i])
    // console.log('tmp1', tmp)
    // 判断数组的下一个元素，是不是和上一个元素一组
    for (let j = i + 1; j < len - 1; j++) {
      if (i == 0) {
        console.log('i, j, arr[i], arr[j]', i, j, arr[i], arr[j])
      }
      if (arr[i] === arr[j]) {
        // 存储数组中所有的相等的值
        tmp.push(arr[j])
      } else {
        // 分组的大小，大于了系统支持的最大数
        if (min > tmp.length) {
          min = tmp.length
        }
        //tmp 是引用类型，
        // console.log('tmp2', tmp)
        dst.push([].concat(tmp))
        // 高程中，对数组真正的清空是length = 0
        tmp.length = 0

        // 最关键的一步， 直接跳过相同的已经处理过的
        i = j
        // 不相等之后，直接跳出循环
        break
      }
    }
  }
  //every 和 foreach的区别，foreach 不支持跳出，break的功能
  console.log('dst--->', dst)
  dst.every(item => {
    if (item.length % min !== 0) {
      // 牌的相同数字之间的个数不是整数倍的时候
      result = false
      return false
    }
  })
  return result
}
