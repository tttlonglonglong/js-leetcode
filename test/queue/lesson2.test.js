import leastInterval from '../../code/queue/lesson2'

test('leastInterval:1', () => {
  expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8)
  expect(leastInterval(['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'], 2)).toBe(8)
})
