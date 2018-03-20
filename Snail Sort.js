const assert = require('assert')

function snail (array) {
  let w = array[0].length
  let w_ = w + 1
  let result = []
  array.forEach(element => {
    element.unshift(null)
  })
  let n = 0
  while (n < w) {
    for (let x = n + 1; x < w_ - n; x++) {
      result.push(array[n][x])
    }
    n++
    for (let y = n; y < w_ - n; y++) {
      result.push(array[y][w_ - n])
    }
    for (let x = w_ - n - 1; x >= n; x--) {
      result.push(array[w_ - n - 1][x])
    }
    for (let y = w_ - n - 2; y >= n; y--) {
      result.push(array[y][n])
    }
  }
  return result
}

assert.equal(
  snail([
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
    ]).join(), 
    [1,2,3,4,5,6,7,8,9].join()
  ) 