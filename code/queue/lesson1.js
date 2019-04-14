/**
 * 622. 设计循环队列
 * 原题链接：https://leetcode-cn.com/problems/design-circular-queue/
 * 删除队首向前移，增加队尾向后移
 */
export default class MyCircularQueue {
  // 构造器创建长度为k的队列
  constructor(k) {
    // 用来保存数据长度为K的数据结构
    this.list = Array(k)
    // 队首指针
    this.front = 0
    // 队尾指针
    this.rear = 0
    // 队列的长度
    this.max = k
  }
  // 向循环队列插入一个元素。如果成功插入则返回真
  enQueue(num) {
    // console.log('this.isFull', this.isFull())
    if (this.isFull()) {
      return false
    } else {
      console.log('插入元素1', this.list, num)
      this.list[this.rear] = num
      // 插入元素后移动尾指针,（因为是循环队列，会头部和尾部的位置不固定）
      this.rear = (this.rear + 1) % this.max
      console.log('插入元素2', this.list)
      return true
    }
  }
  // 从循环队列中删除一个元素。如果成功删除则返回真
  deQueue() {
    // 移除元素就是把队首的元素提出去
    let v = this.list[this.front]
    this.list[this.front] = ''
    // 删除队首指针不断向下移动
    this.front = (this.front + 1) % this.max
    return true
  }
  // 检查循环队列是否为空
  isEmpty() {
    // 为空的时候，队首和队尾指向同一个地方且没有元素
    return this.fron === this.rear && !this.list[this.front]
  }
  // 检查循环队列是否已满
  isFull() {
    // 队列满的时候，队首和队尾指向同一个地方且没有元素
    console.log('this.fron - this.rear', this.front, this.rear)
    return this.front === this.rear && !!this.list[this.front]
  }
  // 从队首获取元素。如果队列为空，返回 -1
  Front() {
    console.log('this.list---this.front', this.list, this.front)
    return this.list[this.front]
  }
  // 获取队尾元素。如果队列为空，返回 -1
  Rear() {
    let rear = this.rear - 1
    // <0 的时候，回到了第一个，真正的队尾应该是在最后一个
    return this.list[rear < 0 ? this.max - 1 : rear]
  }
}
