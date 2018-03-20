const assert = require('assert')

function orderWeight(string) {
  // your code
  let arr = string.split(' ')
  let arr2 = arr.concat().sort(function(a, b) {
    let a_ = a.split('').reduce((acc, cur) => {
      return parseInt(acc) + parseInt(cur)
    })
    let b_ = b.split('').reduce((acc, cur) => {
      return parseInt(acc) + parseInt(cur)
    })
    a_ = parseInt(a_)
    b_ = parseInt(b_)
    if (a_ === b_) {
      if (a < b) {
        return -1
      } else {
        return 1
      }
    }
    return a_ - b_
  })
  return arr2.join(' ')
}

assert.equal(orderWeight("33 6 24"), "24 33 6")
assert.equal(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
assert.equal(orderWeight("233435 33 82088 89 364813 72 11302 123 431901 107 171997 46 196678 175 291989 6 72646 175 272804 182 55"), "123 33 6 11302 107 72 46 55 182 175 175 89 431901 233435 272804 364813 72646 82088 171997 196678 291989")
