const assert = require('assert')

// ann(n) = n - john(ann(n - 1))
// john(n) = n - ann(john(n - 1))

function john(n) {
  // your code
  let john = generate(n).john
  return john
}
function ann(n) {
  let ann = generate(n).ann
  return ann
  // your code
}

function sumJohn(n) {
  // your code
  let john = generate(n).john
  return john.reduce((acc, cur) => {
    return acc + cur
  })
}

function sumAnn(n) {
  // your code
  let ann = generate(n).ann
  return ann.reduce((acc, cur) => {
    return acc + cur
  })
}

function generate (n) {
  let A = [1]
  let J = [0]
  let day = 1
  while (day < n) {
    J[day] = day - A[J[day - 1]]
    A[day] = day - J[A[day - 1]]
    day++
  }
  return {
    ann: A,
    john: J
  }
}