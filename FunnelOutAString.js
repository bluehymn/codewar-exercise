const assert = require('assert')

function funnel_out(funnel){
  let ret = []
  let len = funnel.length
  
  while (funnel[len - 1].length !== 0) {
    ret += funnel[len - 1].pop()
    
    let i = 1
    while(i < len) {
      if (funnel[len - i - 1][0]) {
        let upperLowest = parseInt((funnel[len - i - 1].length - 0.5) / 2)
        let currentLowest =  parseInt((funnel[len - i].length - 0.5) / 2)
        funnel[len - i].splice(
          currentLowest,
          0,
          funnel[len - i - 1].splice(
            upperLowest,
            1
          )[0]
        )
        i++
      }
      else {
        break
      }
    } 
  }
  return ret
}

try {
  // assert.equal(funnel_out([["a","e","c","f"],["d","i","h"],["j","g"],["b"]]),"bghcfiejda")
  // assert.equal(funnel_out([["q"]]),"q")
  // assert.equal(funnel_out([["b","c"],["a"]]),"abc")
  assert.equal(funnel_out([["d","a","c"],["b","e"],["f"]]),"fbadec")
} catch (e) {
  console.log(e)
}