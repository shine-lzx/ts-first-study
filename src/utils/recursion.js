function fibonacci() {}

fibonacci()

if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
}

const arr = [1, 2, 3, 4]
Object.prototype.toString.call(arr) === '[Object Array]' // true
