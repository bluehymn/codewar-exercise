const assert = require('assert')

function minUmbrellas(weather) {
  let home = 0
  let work = 0
  let rainy = ['rainy', 'thunderstorms']

  for (let i = 0; i < weather.length; i+=2) {
    if (rainy.indexOf(weather[i]) != -1) {
      if (home === 0) {
        home++
      }
      home--
      work++
    } 
    if (rainy.indexOf(weather[i + 1]) != -1) {
      if (work === 0) {
        work++
      }
      home++
      work--
    }
  }
  return home + work
}

assert.equal(minUmbrellas(["cloudy"]), 0, "wrong answer for one value in weather array");
assert.equal(minUmbrellas(["rainy", "rainy", "rainy", "rainy"]), 1, "wrong answer for always rainy.");
assert.equal(minUmbrellas(["overcast", "rainy", "clear", "thunderstorms"]), 2, "wrong answer for 2 dry mornings and 2 rainy afternoons.");