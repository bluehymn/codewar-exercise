// https://www.codewars.com/kata/christmas-mission-distribute-gifts-number-3
// Description:
// Christmas is coming soon. Santa Claus is ready for the gift, he will give the gifts to the children. Of course, the gift of Santa Claus is not enough to give all the children, he needs to make a choice. Your task is to help Santa make the best choice:

// Suppose Santa Claus has n gifts, and each child has a wish (the number of gifts to be obtained). Provides an array of integers wishes representing all the wishes. Like this:

//  n = 20
//  wishes = [2,4,3,5,6,10,12,100]
// The result is a possible combination (an array) that happens to be able to distribute all of the gifts. In accordance with the above example, the results can be:

//  [2,3,5,10] or [4,6,10] or [2,6,12] or...
// You should return one of them.

// If there is no valid result, return a string "Mission Failed!"

// Note:
// n and all elements of wishes always be positive integers.
// Some Examples
//  distributeGifts(20,[2,4,3,5,6,10,12,100]) 
//  Can return [2,3,5,10] or [4,6,10] or [2,6,12]...

//  distributeGifts(20,[10,10,40,100]) 
//  hould return [10,10]

//  istributeGifts(20,[20,40,100]) 
//  hould return [20]

//  istributeGifts(20,[30,40,100]) 
//  hould return "Mission Failed!"

const assert = require('assert')

// function distributeGifts(n,wishes){
//   let ret = []
//   let maxCombine = 0
//   let minCombine = 1
//   let len = wishes.length
//   wishes.sort((a,b) => {
//     return a - b
//   })
//   maxCombine = len - 1
//   let acc = 0
//   for (let i = 1; i < len; i++) {
//     acc += wishes[i]
//     if (acc < n) {
//       minCombine++
//     }
//     if (wishes[0] + wishes[i] > n) {
//       maxCombine = i
//       break
//     }
//   }

//   for (let i = minCombine; i <= maxCombine; i++) {
//     let bin = Array(len).fill(1)
//     bin = bin.map((item, index) => {
//       if (index + 1 <= i) {
//         return 1
//       } else {
//         return 0
//       }
//     })
//     let binFirst = bin.concat()
//     ret.push(binFirst)
//     let binFinal = bin.concat().reverse().join('')
//     while (bin.join('') !== binFinal) {
//       let countOne = 0
//       for (let j = 0; j < bin.length - 1; j++) {
//         if (bin[j] === 1 && bin[j + 1] === 0) {
//           bin[j] = 0,bin[j + 1] = 1
//           let k = 0
//           while (k < j) {
//             if (countOne > 0) {
//               bin[k] = 1
//               countOne--
//             } else {
//               bin[k] = 0
//             }
//             k++
//           }
//           let arr = wishes.filter((item, index) => {
//             if (bin[index]) {
//               return true
//             }
//           })
//           let acc = arr.reduce((acc, current) => {
//             return acc + current
//           }, 0)
//           if (acc === n) {
//             ret.push(arr.concat())
//           }
//           break
//         } else if (bin[j] === 1) {
//           countOne++
//         }
//       }
//     }
//   }

//   return ret[0] || 'Mission Failed!'
// }

// let count = 0

function distributeGifts(n, wishes) {
  let len = wishes.length
  let bin = Array(len).fill(1).join('')
  let num = 1
  let minCombine = 0
  let maxCombine = 1
  wishes.concat().sort().reverse().reduce((acc, cur, idx) => {
    if (acc < n) minCombine++
    return acc + cur
  })
  wishes.concat().sort().reduce((acc, cur, idx) => {
    if (acc < n) maxCombine++
    return acc + cur
  })
  while(num <= parseInt(bin, 2)) {
    // count ++
    let numStr = num.toString(2)
    let len = numStr.match(/1/g).length
    if (len < minCombine || len> maxCombine) {
      num++
      continue
    }
    // count ++
    let acc = wishes.reduce((acc_, cur, index) => {
      if (numStr.charAt(index) !== '1') {
        cur = 0
      }
      return acc_ + cur
    })
    if (acc === n) {
      return wishes.filter((item, index) => {
        if (numStr.charAt(index) === '1') {
          return true
        }
      })
    }
    num++
  }
  return 'Mission Failed!'
}
console.time('timer')
// assert.deepEqual(distributeGifts(20,[10,10,40,100]),[10,10])
distributeGifts(191,[8,9,5,1,23,1,24,22,14,14,7,2,19,11,8,27,25,26,16,2,30,4,2,17,9,15,9,29,29,21,29,16,20,26,27])
console.log(count)
// assert.deepEqual(distributeGifts(191,[8,9,5,1,23,1,24,22,14,14,7,2,19,11,8,27,25,26,16,2,30,4,2,17,9,15,9,29,29,21,29,16,20,26,27]),[1,2,2,9,9,29,21,29,16,20,26,27])
console.timeEnd('timer')
// assert.deepEqual(distributeGifts(20,[30,40,100]),"Mission Failed!") 