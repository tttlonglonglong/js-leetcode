import Heap from '../../code/heap/lesson2'
test('Heap:1 ', () => {
  let heap = new Heap('chcaa')
  // aacch ccaah 都可以
  expect(heap.toString()).toMatch(/ccaah|aacch/)
})
