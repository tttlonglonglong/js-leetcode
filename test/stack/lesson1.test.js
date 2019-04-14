import baseball from '../../code/stack/lesson1'

test('棒球比赛', () => {
  expect(baseball(['5', '2', 'C', 'D', '+'])).toBe(30)
})

test('棒球比赛', () => {
  expect(baseball(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27)
})
