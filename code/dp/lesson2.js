/**
 * 787. K 站中转内最便宜的航班
 * 原题链接：https://leetcode-cn.com/problems/cheapest-flights-within-k-stops/
 *
 */
// 起始位置 目的位置 k个中转站
export default (fights, src, dst, k) => {
  // 对n个城市 m个航班做飞行说明
  // let fights = fights [[0,1,100],[1,2,100],[0,2,500]]
  let cheap = (fights, src, dst, k) => {
    // console.log('fights--->', fights)

    // 首先算目的地 dst的前一站
    let prev = fights.filter(item => item[1] === dst)
    // 求最小值
    let min = Math.min.apply(
      null,
      prev.map(item => {
        // 从dst 往前找，找到了起始城市并且 中转的次数小于 k
        if (item[0] === src && k > -1) {
          // 返回 价格
          // console.log('item[2]', item[2])
          return item[2]
        } else if (k === 0 && item[0] !== src) {
          // 已经找了k站，还不是起始站,返回一个无穷大的值，上面的min函数就不会取它了
          return Number.MAX_SAFE_INTEGER
        } else {
          // 还在k 和 src 边界内，继续往前找
          // 把现在的城市变成终点城市，并且 k-1
          return item[2] + cheap(fights, src, item[0], k - 1)
        }
      })
    )
    return min
  }
  // 没有找到返回-1
  // console.log('cheap(fights, src, dst, k)', cheap(fights, src, dst, k))
  return cheap(fights, src, dst, k) || -1
}
