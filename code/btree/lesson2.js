/*
 * 98. 验证二叉搜索树
 * 原题链接：https://leetcode-cn.com/problems/validate-binary-search-tree/
 */

// 二叉树的节点
class Node {
  constructor(val) {
    this.val = val
    this.left = this.right = undefined
  }
}

// 根据数组生成生成搜索二叉树
class Tree {
  constructor(data) {
    let root = new Node(data.shift())
    // 遍历所有数据， 逐渐插入到当前这个课搜索树中去
    data.forEach(item => {
      this.insert(root, item)
    })
    return root
  }
  // 构造二叉搜索树
  insert(node, data) {
    if (node.val > data) {
      // 没有左节点直接放到node的左节点
      if (node.left == undefined) {
        node.left = new Node(data)
      } else {
        this.insert(node.left, data)
      }
    } else {
      if (node.right == undefined) {
        node.right = new Node(data)
      } else {
        this.insert(node.right, data)
      }
    }
  }
  static walk(root) {
    // 左右节点没有，就没有了
    console.log('walk--root', root)
    if (!root && (!root.left && !root.right)) {
      return true
    } else if ((root.left && root.val < root.left.val) || (root.right && root).val > root.right.val) {
      return false
    } else {
      return Tree.walk(root.left) && Tree.walk(root.right)
    }
  }
}

export default Tree

export { Node }
