import cheap from '../../code/dp/lesson2'

test('cheap: 1', () => {
  let fights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
  expect(cheap(fights, 0, 2, 1)).toBe(200)
})

test('cheap：2', () => {
  let fights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
  expect(cheap(fights, 0, 2, 0)).toBe(500)
})
