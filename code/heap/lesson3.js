// 算一个整数的质数
class Ugly {
  // 计算指定正整数n的质因数
  static getPrimes(n) {
    let prime = n => {
      // 存储所有的质因数
      let arr = []

      for (let i = 2; i < n / 2 + 1; i++) {
        // i 是因数，且 i没有因数
        if (n % i === 0 && !prime(i).length) {
          console.log('质因数---i', i)
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
