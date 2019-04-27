import Ugly from '../../code/heap/lesson3'
test('Ugly:1 ', () => {
  expect(Ugly.getPrimes(6)).toEqual([2, 3])
  expect(Ugly.getPrimes(4)).toEqual([2])
  expect(Ugly.getPrimes(180)).toEqual([2, 3, 5])
})
