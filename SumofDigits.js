function digital_root(n) {
  // ...
  return n.toString().split('').reduce((acc, cur) => {
    return parseInt(acc) + parseInt(cur)
  })
}

console.log(digital_root(132189))