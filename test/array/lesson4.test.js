import grayCode from '../../code/array/lesson4'
test('grayCode:2', () => {
  expect(grayCode(2)).toEqual(['00', '01', '11', '10'])
})
test('grayCode:0', () => {
  expect(grayCode(0)).toEqual(['0'])
})
test('grayCode:3', () => {
  expect(grayCode(3)).toEqual(['000', '001', '011', '010', '110', '111', '101', '100'])
})