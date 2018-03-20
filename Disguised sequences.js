const assert = require('assert')

function u1(n, p) {
  // your code
  let acc = 0
  for (let k = 0; k <= n; k++) {
    acc += (k%2 === 0 ? 1 : -1) * p * Math.pow(4, n - k) * combination(2 * n - k + 1, k)
  }

  function combination(m, n) {
    if (n === 0) return 1
    return  arrange(m, 1) / arrange(m - n, 1) / arrange(n, 1)
  }

  function arrange(m, n) {
    let acc = 1
    while (m >= n) {
      acc = acc * m
      m--
    }
    return acc
  }

  return Math.round(acc)
}

function v1(n, p) {
  // your code
  let acc = 0
  for (let k = 0; k <= n; k++) {
    acc += (k%2 === 0 ? 1 : -1) * p * Math.pow(4, n - k) * combination(2 * n - k, k)
  }

  function combination(m, n) {
    if (n === 0) return 1
    return  arrange(m, 1) / arrange(m - n, 1) / arrange(n, 1)
  }

  function arrange(m, n) {
    let acc = 1
    while (m >= n) {
      acc = acc * m
      m--
    }
    return acc
  }

  return Math.round(acc)
}
assert.equal(u1(17, 32), 576)
// assert.equal(v1(11, 94), 2162)

