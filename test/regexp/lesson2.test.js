import regModeStr from '../../code/regexp/lesson2'

test('regModeStr1', () => {
  expect(regModeStr('aaa', 'caa*')).toBe(false)
})

test('regModeStr2', () => {
  expect(regModeStr('aab', 'c*a*b')).toBe(true)
})

test('regModeStr3', () => {
  expect(regModeStr('aaabc', 'a*.*c')).toBe(true)
})
test('regModeStr4', () => {
  expect(regModeStr('aaabcc', 'a*.*ca')).toBe(false)
})
test('regModeStr5', () => {
  expect(regModeStr('aaabca', 'a*.*ca')).toBe(true)
})
