import telComp from '../../code/array/lesson1'
test('testComb:23', () => {
  expect(telComp('23').toEqual(['a1d', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']))
})

// test('testComb:234', () => {
//   expect(telComp('45').toBe(['ad', 'a1e', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']))
// })
