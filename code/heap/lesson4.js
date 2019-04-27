/*
 *  313. 超级丑数
 *  原题链接: https://leetcode-cn.com/problems/super-ugly-number/
 *  遍历的查找不是最优解
 * */
class Ugly {
  constructor(n, primes) {
    this.n = n
    this.primes = primes
  }
  //
  getAll() {
    // 超级丑数列表
    let res = [1]
    let i = 2 // 从2 开始找
    let primes = this.primes
    while (res.length < this.n) {
      // 拿到某个整数的质因数列表
      let arr = Ugly.getPrimes(i)
      let k = 0
      let l = arr.length
      for (; k < l; k++) {
        // 质因数列表 是否在在超级丑数的范围中
        if (!primes.find(item => item === arr[k])) {
          //
          break
        }
      }
      //k === l： 质因数列表遍历玩了, 都 在超级丑数的范围中
      if (k === l) {
        //k === l 有俩种情况，一种是当前这个数压根质因数就没有，二种是所有质因数都在指定列表中
        // 质因数列表没有的时候，for循环根本不执行
        if (l === 0) {
          // i这个数没有质因数，且本身是指定列表的质因数，它就是超级丑数
          if (primes.find(item => item === i)) {
            res.push(i)
          }
        } else {
          res.push(i)
        }
      }
      i++
    }
    return res[this.n - 1]
  }
  // 计算指定正整数n的质因数
  static getPrimes(n) {
    let prime = n => {
      // 存储所有的质因数
      let arr = []

      for (let i = 2; i < n / 2 + 1; i++) {
        // i 是因数，且 i没有因数
        if (n % i === 0 && !prime(i).length) {
          // console.log('质因数---i', i)
          // arr[i]的质数
          arr.push(i)
        }
      }
      return arr
    }
    return prime(n)
  }
}

export default Ugly
