/**
 * 459. 选择排序法
 *从左边第一个一次和后面的比较，把最小的方左边
 */
export default arr => {
  // 循环把最小的先找出来
  for (let i = 0, len = arr.length, min; i < len; i++) {
    min = arr[i]
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        let c = min
        min = arr[j]
        arr[j] = c
      }
    }
    console.log('arr[i] = min', min)
    arr[i] = min
  }
  console.log('arr.length', arr.length)
  console.log('arr.length', arr)
  return arr
}
