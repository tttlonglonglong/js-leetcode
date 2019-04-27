import dp from '../../code/dp/lesson1'

test('dp：1', () => {
  let arr = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
  expect(dp(arr, 3, 3)).toBe(2)
})

test('dp：2', () => {
  let arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  expect(dp(arr, 3, 3)).toBe(6)
})
