// array get index, filter by index, return str
function reduceArr(arr) {
    return arr.map(x => arr.indexOf(x) % 2 == 0 ? x : 0)
    .filter(x=> x!=0)
    .join(' ')
  }