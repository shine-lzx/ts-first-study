var counter = 3
function incCounter() {
  counter++
}

setTimeout(() => {
  counter = 9
}, 0)

module.exports = {
  get counter() {
    return counter
  },
  incCounter: incCounter,
}
