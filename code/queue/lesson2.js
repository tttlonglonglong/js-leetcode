/**
 * 621. 任务调度器
 *原题链接：https://leetcode-cn.com/problems/task-scheduler/
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
  while (1) {
    // 任务清单中的任务 是不是0
    let keys = Object.keys(Q)
    if (!keys[0]) {
      // 当没有key的时候 说明
    }
    // 声明一个队列用来存储 1+n 任务单元
    let tmp = []
    for (let i = 0; i < n; i++) {
      // 找出任务清单中最多的优先处理
    }
  }
  return 0
}
