var counter = 3
function incCounter() {
  counter++
}

setTimeout(() => {
  counter = 9
}, 0)

export { counter }
