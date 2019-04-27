/**
 * 148. 排序链表
 * 原题链接：https://leetcode-cn.com/problems/sort-list/
 *
 */
// 声明链表节点
class Node {
  constructor(value) {
    this.val = value
    this.next = undefined
  }
}

// 声明链表的数据结构
class NodeList {
  // 构造函数默认接收一个数组
  constructor(arr) {
    // 声明一个头部节点
    let head = new Node(arr.shift())
    // 把剩余的数据都用节点的方式实例化，并且和头部指针关联起来
    // 节点之间相互引用的关系,刚开始就是头部
    let next = head
    arr.forEach(item => {
      // head的next 指向下一个节点
      next.next = new Node(item)
      // 把新生成的节点作为下一个节点的父节点
      next = next.next
    })
    //当return 返回一个对象的时候, 改变了class对象实例的指针(this);返回的是基本数据类型，返回的是控对象;没有return 是当前类的实例
    return head
  }
}

// 排序：节点之间的链表关系不改变，只改变他们存储的值，相当于完成俩个节点的转换
// 交换俩个节点的值
let swap = (p, q) => {
  let val = p.val
  p.val = q.val
  q.val = val
}

// 找基准元素的节点
let partion = (begin, end) => {
  let val = begin.val
  let p = begin
  let q = begin.next
  while (q !== end) {
    if (q.val < val) {
      p = p.next
      swap(p, q)
    }
    q = q.next
  }
  // 让基准元素在中间：交换p 和起始指针的位置，起始的基准元素左边都是小于它的，右边都是大于它的
  swap(p, begin)
  return p
}

// 排序
export default function sort(begin, end) {
  if (begin !== end) {
    // 找到基准元素
    let part = partion(begin, end)
    sort(begin, part)
    sort(part.next, end)
  }
}

export { Node, NodeList }
