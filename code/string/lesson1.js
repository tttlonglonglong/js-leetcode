/**
 * 反转字符串
 * @param {string} s
 * @return {string}
 */
// export default str => {
//   // 字符串按空格进行分隔，保存数组，数组元素的先后顺序就是单词的顺序
//   let arr = str.split(' ')

//   //对数组进行遍历，每个元素进行反转
//   let result = arr.map(item => {
//     // 把每个单词都变成一个数组
//     return item
//       .split('')
//       .reverse()
//       .join('')
//   })
//   return result.join(' ')
// }

// 优雅一点的写法
// export default str => {
//   // 1.字符串按空格进行分隔，保存数组，数组元素的先后顺序就是单词的顺序
//   // 2.对数组进行遍历，每个元素进行反转
//   return str
//     .split(' ')
//     .map(item => {
//       // 把每个单词都变成一个数组
//       return item
//         .split('')
//         .reverse()
//         .join('')
//     })
//     .join(' ')
// }

// split 还可以按正则进行分隔
// export default str => {
//   // 1.字符串按空格进行分隔，保存数组，数组元素的先后顺序就是单词的顺序
//   // 2.对数组进行遍历，每个元素进行反转
//   return str
//     .split(/\s/g)
//     .map(item => {
//       // 把每个单词都变成一个数组
//       return item
//         .split('')
//         .reverse()
//         .join('')
//     })
//     .join(' ')
// }

// match: 正则的match方法: 匹配哪些, 匹配所有单词
export default str => {
  // 1.字符串按空格进行分隔，保存数组，数组元素的先后顺序就是单词的顺序
  // 2.对数组进行遍历，每个元素进行反转
  return str
    .match(/[\w']+/g)
    .map(item => {
      // 把每个单词都变成一个数组
      return item
        .split('')
        .reverse()
        .join('')
    })
    .join(' ')
}
