function play(games: String) {
  console.log('=======>', games)
}

function alertName(): void {
  alert('My name is Tom')
}

function getLen(something: string | number): string {
  return something.toString()
}

const mySum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y
}

interface searchFun {
  (arg1: number, arg2: number): number
}

let myFun: searchFun

myFun = function (arg1: number, arg2: number) {
  return arg1 + arg2
}

export { play, alertName, getLen, mySum, myFun }
