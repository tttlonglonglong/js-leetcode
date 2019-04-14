import subLoopStr from '../../code/regexp/lesson1'

test('subLoopStr', () => {
  expect(subLoopStr('abcabc')).toBe(true)
})

test('subLoopStr', () => {
  expect(subLoopStr('abcabcd')).toBe(false)
})
