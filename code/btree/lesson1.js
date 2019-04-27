/*
 * 101. 对称二叉树
 * 原题链接：https://leetcode-cn.com/problems/symmetric-tree/
 */

// 二叉树的节点
class Node {
  constructor(val) {
    this.val = val
    this.left = this.right = undefined
  }
}

// 根据数组生成二叉树
class Tree {
  constructor(data) {
    // 需要把所有节点维护在一个临时的数组中，要算所在的层级和对应的父节点
    // 临时存储所有节点，方便寻找父子节点
    let nodeList = []
    // 顶级节点
    let root
    for (let i = 0, len = data.length; i < len; i++) {
      let node = new Node(data[i])
      nodeList.push(node)
      if (i > 0) {
        // 计算当前节点属于那一层：数组的位置，开根号2，取整; sqrt() 方法可返回一个数的平方根;pow() 方法可返回 x 的 y 次幂的值
        let n = Math.floor(Math.sqrt(i + 1))
        // 每一层的第几个 / 2 向上区取整 就是父节点的 位置
        // 记录当前层的起始点
        let q = Math.pow(2, n) - 1 // 每一层起始点
        // 记录上一层的起始点
        let p = Math.pow(2, n - 1) - 1 // 上一层起始点
        // 计算父节点: 下一层的每俩个节点 对应 上一层的一个节点
        let parent = nodeList[p + Math.floor((i - q) / 2)]
        console.log('parent--->', parent)
        console.log('p + Math.floor(i - q) / 2--->', p + Math.floor(i - q) / 2)
        // 判断是父节点的左节点还是右节点：二叉树只有俩个节点，只用看它左边有没有节点
        // 关联当前节点和父节点
        if (parent.left) {
          parent.right = node
        } else {
          parent.left = node
        }
      }
    }
    // 暴露跟节点
    root = nodeList.shift()
    nodeList.length = 0
    return root
  }

  // 判断二叉树是否对称
  static isSymmetry(root) {
    if (!root) {
      s
      return true
    }
    // 递归的描述
    let walk = (left, right) => {
      // 遍历到没有节点后就是true，全部遍历完，
      // 这个判断应该有问题
      if (!left && !right) {
        return true
      }
      // 左右不想等的时候
      if ((left && !right) || (!left && right) || left.val !== right.val) {
        return false
      }
      return walk(left.left, right.right) && walk(left.right, right.left)
    }
    return walk(root.left, root.right)
  }
}

export default Tree

export { Node }
