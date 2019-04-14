/**
 * 459. 冒泡排序法
 *相邻比较把最大的先找出来
 */
export default arr => {
  // 循环把最大的先找出来
  for (let i = arr.length - 1, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      tmp = arr[j]
      if (tmp > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}
