
const assert = require('assert');

function patchData(str) {
  let index = 0
  let rest = ''
  let soldiers = []
  let fiveHundred = "\xf4\x01"
  while (index < str.length) {
    rest = str.slice(index)
    let nameLen = parseInt((rest.substr(1, 1).charCodeAt(0)).toString(16) +
              (rest.substr(0, 1).charCodeAt(0)).toString(16) + '', 16)
    rest = rest.slice(2)
    let name = rest.slice(0, nameLen)
    rest = rest.slice(12)
    soldiers.push(str.substr(index, nameLen + 2) + fiveHundred)
    index += nameLen + 4
  }
  return soldiers.join('')
}

try {
  assert.equal(patchData("\x0C\x00Maximilianu0\x04\x00\x0C\x00Maximilianu1\x04\x00\x0C\x00Maximilianu2\x04\x00"), "\x0C\x00Maximilianus\xf4\x01", "OK")
} catch (e) {
  console.log(e)
}

