import Heap from '../../code/heap/lesson1'
test('Heap:1 ', () => {
  let heap = new Heap([1, 10, 9, 5, 3, 11])
  expect(heap.sort()).toEqual([1, 3, 5, 9, 10, 11])
})

test('Heap:2 ', () => {
  let heap = new Heap([1, 10, 9, 5, 3, 11, 2])
  expect(heap.sort()).toEqual([1, 2, 3, 5, 9, 10, 11])
})
