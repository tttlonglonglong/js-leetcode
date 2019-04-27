/*
 * 如何进行堆排序
 */

// 创建一个堆类
class Heap {
  // data数组
  constructor(data) {
    this.data = data
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
      // 上面每一次构建最大堆，只是取出了一个最大值
      for (let j = 0; j < n; j++) {
        Heap.swap(iArr, 0, n - 1 - j) // 交换第一个节点和最后一个节点的值
        //每替换一次拿出去一个元素，j次，拿出去了j个元素
        Heap.maxHeapify(iArr, 0, n - 1 - j - 1) // 交换之后，从0开始构建最大堆
      }
      console.log('堆排序完的数组---->', iArr)
      return iArr
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

export default Heap
