/*
 *  313. 超级丑数
 *  原题链接: https://leetcode-cn.com/problems/super-ugly-number/
 *  堆查找
 * */
class Ugly {
  constructor(n, primes) {
    this.n = n
    this.primes = new Heap(primes)
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
        if (!primes.find(arr[k])) {
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
          if (primes.find(i)) {
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

// 创建一个堆类
class Heap {
  // data数组
  constructor(arr) {
    this.data = arr
    this.max = arr.length
    this.sort()
  }
  // 排序，给定n个节点用构建最大堆的方式排序
  sort() {
    let iArr = this.data
    let n = iArr.length
    if (n <= 1) {
      return iArr
    } else {
      // 构建n个节点的最大堆，从最后一个父节点开始
      // 父节点和子节点是 i 2i 的关系
      console.log('n-->', iArr, iArr.length)
      // 遍历每个父节点构建最大堆
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        console.log('i', i)
        Heap.maxHeapify(iArr, i, n)
      }
      console.log('构建完的最大堆', iArr)
      // 只需要构建一次最大堆，不需要排序
      // // 上面每一次构建最大堆，只是取出了一个最大值
      // for (let j = 0; j < n; j++) {
      //   Heap.swap(iArr, 0, n - 1 - j) // 交换第一个节点和最后一个节点的值
      //   //每替换一次拿出去一个元素，j次，拿出去了j个元素
      //   Heap.maxHeapify(iArr, 0, n - 1 - j - 1) // 交换之后，从0开始构建最大堆
      // }
      console.log('堆排序完的数组---->', iArr)
      return iArr
    }
  }
  // 堆的查找功能
  find(val, i = 0) {
    let arr = this.data
    // 传入的值大于了根节点的值； i已经大于了顶堆的最大值
    if (val > arr[i] || i > this.max) {
      return false
      // val 等于顶点的值
    } else if (val === arr[i]) {
      return val
    } else {
      // 去左子树和右子树找
      return this.find(val, i * 2 + 1) || this.find(val, i * 2 + 2)
    }
  }
  // 交换俩个元素的方法:Arr, i, largest
  static swap(arr, a, b) {
    // console.log('交换最大值---》1', arr, a, b)
    if (a === b) {
      //俩个元素一样 就不用换了
      return ''
    }
    let c = arr[a]
    arr[a] = arr[b]
    arr[b] = c
    // console.log('交换最大值---》2', arr, a, b)
  }

  // 构建最大堆的过程： Arr: 数组，i：节点，size：有效数组的长度
  static maxHeapify(Arr, i, size) {
    // i节点的左节点(索引)
    let l = i * 2 + 1
    // i节点的右节点
    let r = i * 2 + 2
    let largest = i // 默认父节点比子节点大，下面比较，再替换值
    // console.log('i, l, r', i, l, r)
    // 每构建一次最大堆，要把最大堆的顶点从数组中排除出去，排除出去不是将其从数组中扔出去，而是用size 这个有效长度来标记
    // 每构建一次最大堆，顶点和最后一个元素做交换
    // 排序之后要把完整的数组，还回去
    // 父节点i 和 左节点l做比较取最大值
    if (l <= size && Arr[l] > Arr[largest]) {
      largest = l
    }
    // 右节点 和 最大值(左节点或父节点)比较
    if (r <= size && Arr[r] > Arr[largest]) {
      largest = r
    }
    // 最大值变化时，交换树中节点的位置
    if (largest !== i) {
      Heap.swap(Arr, i, largest)
      // 交换节点后 要让子树继续满足最大堆的特性
      Heap.maxHeapify(Arr, largest, size)
    }
  }
}
export default Ugly
export { Heap }
