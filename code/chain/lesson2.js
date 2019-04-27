/**
 * 141. 环形链表
 * 原题链接：https://leetcode-cn.com/problems/linked-list-cycle/
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

// 判断链表是否是环形
export default head => {
  // 慢指针，比快指针慢一步
  let slow = head
  // 快指针
  let fast = head.next
  // 直到遍历到reuturn 顺还结束
  while (1) {
    // 快指针没有 或 走到最后了
    if (!fast || !fast.next) {
      return false
      // 如果遇到了快指针 遇到 慢指针
    } else if (fast === slow || fast.next === slow) {
      // fast 跑到slow 后面去了，说明是环状的
      return true
    } else {
      slow = slow.next
      fast = fast.next.next
    }
  }
}

export { Node, NodeList }
