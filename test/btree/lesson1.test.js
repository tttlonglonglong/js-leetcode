import Tree from '../../code/btree/lesson1'

test('Tree:1 ', () => {
  let root = new Tree([1, 2, 2, 3, 4, 4, 3])
  console.log('root', root)
  expect(Tree.isSymmetry(root)).toBe(true)
})

test('Tree:1 ', () => {
  let root = new Tree([1, 2, 2, 3, 4, 5, 3])
  console.log('root', root)
  expect(Tree.isSymmetry(root)).toBe(false)
})
