function Canvas(width, height) {
  if (width <= 0 || height <= 0) {
    throw 'Out of bounds'
  }

  let data = new Array(width*height).fill(' ')
  let dataLen = data.length

  function resolvePoint (x, y) {
    return (width*y) + x
  }

  function drawLine (x0, y0, x1, y1) {
    if (x0 === x1) {
      let diff = y1 - y0
      data[resolvePoint(x0, y1)] = 'x'
      while (diff !== 0) {
        data[resolvePoint(x0, y1 - diff)] = 'x'
        diff = diff - diff/Math.abs(diff)
      }
    } else if (y0 === y1) {
      let diff = x1 - x0
      data[resolvePoint(x1, y0)] = 'x'
      while (diff !== 0) {
        data[resolvePoint(x1 - diff, y0)] = 'x'
        diff = diff - diff/Math.abs(diff)
      }
    }
  }

  this.draw = (x0, y0, x1, y1) => {
    if (x0 >= width || x1 >= width || y0 >= height || y1 >= height) {
      throw 'Out of bounds'
    }
    if (x0 === x1 || y0 === y1) {
      drawLine(x0, y0, x1, y1)
    } else {
      drawLine(x0, y0, x1, y0)
      drawLine(x1, y0, x1, y1)
      drawLine(x1, y1, x0, y1)
      drawLine(x0, y1, x0, y0)
    }
    return this;
  }

  this.fill = (x, y, ch) => {
    if (x >= width || y >= height) {
      throw 'Out of bounds'
    }
    let dilateRect = [resolvePoint(x,y)]
    let filled = [resolvePoint(x,y)]
    // let outerOffsetMap = [-width-1, -width, -width+1, -1, 1, width-1, width, width+1]
    let outerOffsetMap = [-width, -1, 1, width]
    if (data[resolvePoint(x,y)] !== ' ') return
    data[resolvePoint(x,y)] = ch
    while (dilateRect.length) {
      let dilateRectCache = []
      dilateRect.forEach(index => {
        outerOffsetMap.forEach((offset, position) => {
          let idx = index + offset
          if (idx >= 0 &&
              idx < dataLen &&
              filled.indexOf(idx) === -1 &&
              dilateRectCache.indexOf(idx) === -1 &&
              data[idx] === ' ') {
                if (position === 2) {
                  if ((idx + 1) % width !== 1) {
                    dilateRectCache.push(idx)
                    data[idx] = ch
                  }
                } else if (position === 1) {
                  if ((idx + 1) % width !== 0) {
                    dilateRectCache.push(idx)
                    data[idx] = ch
                  }
                } else {
                  dilateRectCache.push(idx)
                  data[idx] = ch
                }
          }
        })
      })
      dilateRect = dilateRectCache.concat()
      filled = filled.concat(dilateRect)
      // this.drawCanvas()
    }
    
    return this;
  }

  this.drawCanvas = () => {
    let ret = ''
    for (let i = 0; i < width + 2; i++) {
      ret = ret + '-'
    }
    ret = ret + '\n'
    for (let y = 0; y < height; y++) {
      ret = ret + '|'
      for (let x = 0; x < width; x++) {
        ret = ret + data[resolvePoint(x, y)]
      }
      ret = ret + '|\n'
    }
    for (let i = 0; i < width + 2; i++) {
      ret = ret + '-'
    } 
    return ret;
  }
}

console.time('t')
let c = new Canvas(20, 4);
// c.draw(1, 1, 5, 5)
c.draw(0, 1, 5, 1).draw(5, 2, 5, 3).draw(13, 0, 17, 2).fill(9, 2, 'o');
// c.draw(1, 1, 5, 5).fill(3, 3, '0')
c.drawCanvas()
console.timeEnd('t')