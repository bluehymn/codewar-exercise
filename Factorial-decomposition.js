const assert = require('assert')

function decomp(n) {
  // your code
  let arr = [[], 1]
  let ret = {}
  let retStr = ''
  for (let i = 2; i <= n; i++) {
    arr[i] = factoring(i, [])
  }

  function factoring (num, result) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        result.push(i)
        return factoring(num / i, result)
      }
    }
    result.push(num)
    return result
  }
  
  arr = arr.reduce((acc, cur) => {
    return acc.concat(cur)
  })

  arr.forEach(num => {
    let key = num
    if (ret[key]) {
      ret[key]++
    } else {
      ret[key] = 1
    }
  })

  for (let key in ret) {
    if (key > 1) {
      retStr = retStr + key + (ret[key] > 1 ? '^' + ret[key] + ' * ' : ' * ')
    }
  }
    
  return retStr.slice(0, -3)
}

assert.equal(decomp(17), "2^15 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17")
assert.equal(decomp(5), "2^3 * 3 * 5")
assert.equal(decomp(22), "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19")
assert.equal(decomp(14), "2^11 * 3^5 * 5^2 * 7^2 * 11 * 13")
assert.equal(decomp(25), "2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23")