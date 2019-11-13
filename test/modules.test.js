const func = require('../src/modules')
const sum = func.sum
const multiply = func.multiply
const average = func.average

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('multiply 2 * 5 to equal 10', () => {
  expect(multiply(2, 5)).toBe(10)
})

test('average of [1,2,3,4,5] is 3', () => {
  expect(average([1, 2, 3, 4, 5])).toBe(3)
})