const assert = require('assert')

function mix(s1, s2) {
  // your code
  let DicS1 = {}
  let DicS2 = {}
  for (let i = 0; i < (s1.length >= s2.length ? s1.length : s2.length); i++) {
    if (i < s1.length) {
      let letter = s1.charAt(i)
      if (DicS1[letter] === undefined) {
        DicS1[letter] = letter
      } else {
        DicS1[letter] += letter
      }
    }
    if (i < s2.length) {
      let letter = s2.charAt(i)
      if (DicS2[letter] === undefined) {
        DicS2[letter] = letter
      } else {
        DicS2[letter] += letter
      }
    }
  }
  let DicS1Keys = Object.keys(DicS1)
  let result = []
  for (let i = 0; i < DicS1Keys.length; i++) {
    let key = DicS1Keys[i]
    if (key.match(/[a-z]/)) {
      if (DicS2[key] !== undefined) {
        if (DicS1[key].length > DicS2[key].length) {
          result.push('1:' + DicS1[key])
        }
        if (DicS1[key].length < DicS2[key].length) {
          result.push('2:' + DicS2[key])
        }
        if (DicS1[key].length === DicS2[key].length) {
          result.push('=:' + DicS1[key])
        }
        delete DicS2[key]
      } else {
        result.push('1:' + DicS1[key])
      }
    }
  }
  let DicS2Keys = Object.keys(DicS2) 
  for (let i = 0; i < DicS2Keys.length; i++) {
    let key = DicS2Keys[i]
    if (key.match(/[a-z]/)) {
      result.push('2:' + DicS2[key])
    }
  }
  result = result.filter((item) => {
    return item.slice(2).length > 1
  })
  result.sort(function(a, b){
    if (a.slice(2).length < b.slice(2).length) {
      return 1
    }
    if (a.slice(2).length === b.slice(2).length) {
      return a < b ? -1 : 1
    }
    if (a.slice(2).length > b.slice(2).length) {
      return -1
    }
  })
  return result.join('/')
}

// assert.equal(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr")
assert.equal(mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
assert.equal(mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
assert.equal(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo")
assert.equal(mix("codewars", "codewars"), "")
assert.equal(mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")