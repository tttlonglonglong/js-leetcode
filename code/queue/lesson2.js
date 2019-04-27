/**
 * 621. 任务调度器
 *原题链接：https://leetcode-cn.com/problems/task-scheduler/
 */
/**
  JS字符串补全方法padStart()和padEnd()
    var a = '7'
    a.padStart(2, '0')
    // a ===> 07
    var b = 'hi'
    b.padStart(10, 'hello')
    b ===> hellohelhi, 重复补充
*/

export default (tasks, n) => {
  // 表示最终队列的执行结果
  let q = ''
  // 对所有的任务进行归类存储
  let Q = {}
  tasks.forEach(item => {
    if (Q[item]) {
      Q[item]++
    } else {
      Q[item] = 1
    }
  })
  // console.log('QQ--->', Q)
  let j = 1
  while (1) {
    // 任务清单中的任务 是不是0
    let keys = Object.keys(Q)
    if (!keys[0]) {
      // 当没有key的时候，说明没有任务了，跳出循环
      break
    }
    // 声明一个队列用来存储 1+n 任务单元
    let tmp = []
    for (let i = 0; i <= n; i++) {
      // 找出任务清单中最多的优先处理
      let max = 0 // 记录最大值
      let key // 记录最大值的名称
      let pos // 记录最大值的位置
      keys.forEach((item, idx) => {
        if (Q[item] > max) {
          max = Q[item]
          key = item
          pos = idx
        }
      })
      console.log('keys', keys)
      // console.log('key', key)
      // 找到了最大值之后
      if (key) {
        // 先将最长的任务推入临时队列
        tmp.push(key)
        // console.log('tmp1--->', tmp)
        // 将已经推入临时队列的key 删除，下一次for循环就不遍历这个key了
        keys.splice(pos, 1)
        Q[key]--
        // console.log('Q[key] ', Q[key])
        if (Q[key] < 1) {
          delete Q[key]
        }
      } else {
        // 如果没有找到key值说明没有任务了
        break
      }
    }
    // break
    // 填充冷却时间
    console.log('tmp----->', tmp, n + 1)
    q += tmp.join('').padEnd(n + 1, '-')
    console.log('q----->', q, j)
    j++
  }
  // 边界处理,最后不要出现冷却时间，后面没有任务了，加冷却时间没有意义
  // console.log('q--->', q)
  //  正则去掉最后的冷却
  q = q.replace(/-+$/g, '')
  // q的长度就是时间
  return q.length
}
