const sum = (a, b) => a + b

const multiply = (a, b) => a * b

const average = (a) => {
  let item = a || []
  let sum = 0

  for (let i = 0; i < item.length; i++) {
    sum += item[i]
  }

  return sum / item.length
}

module.exports = { sum, multiply, average }
