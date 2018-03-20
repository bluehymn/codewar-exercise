const assert = require('assert')

function productFib(prod){
  let fib = [0, 1]
  let i = 2
  while (i > 1) {
    fib[i] = fib[i - 1] + fib[i-2]
    if (fib[i] * fib[i - 1] === prod) {
      return [fib[i -1],fib[i], true]
    } else {
      if (fib[i] * fib[i - 1] < prod && (fib[i] + fib[i - 1]) * fib[i] > prod) {
        return [fib[i], fib[i] + fib[i - 1], false]
      }
    }
    i++
  }
}



assert.equal(productFib(4895), [55, 89, true].join()) 
assert.equal(productFib(5895), [89, 144, false].join())
assert.equal(productFib(74049690), [6765, 10946, true].join())