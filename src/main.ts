import {
  NoYes,
  handleChose,
  ResultStatus,
  Explain,
  Hebdomad,
} from './Test/enumType/index'

console.log(handleChose(NoYes.NO)) //否

let status = new Explain(ResultStatus.Errors).outputStatus(ResultStatus.Errors)
console.log('接口请求状态', status)

console.log(Hebdomad.Monday)

/**接口相关 */
import { Person, You, Life, Realize } from './Test/interfaceType/index'

// 接口实现
let you: Person = {
  name: 'shine-lzx',
  age: 18,
  hobby: 'play games',
}

console.log('你的名字', you.name, '你的年龄', you.age, '你的爱好？', you.hobby)

let my: You = {
  name: 'shine-lzx',
  age: 18,
  work: 'programmer',
}

console.log('my name is', my.name, 'my work is', my.work)

let life = new Realize('shine-lzx', 18, 'programmer', '苦逼')
console.log(life)

/** lib.d.ts相关 */
import { foo, window, Math } from './Test/lib.d.ts/index'
const bar = foo.toString()
console.log(bar)

let win: window = {
  helloWorld() {
    console.log('hello World')
  },
}

win.helloWorld()

// Math.seedrandom('3.1415926') //TODO Uncaught TypeError: Cannot read property 'seedrandom' of undefined???

/**函数相关 */
import { heavyLoad, CallMeWithNewToGetString, fb } from './Test/fun/index'
// let funOne = heavyLoad(1, 2)
// console.log('funOne', funOne)
console.log(heavyLoad(1))
console.log(heavyLoad(1, 2))
console.log(heavyLoad(1, 2, 3))
console.log(heavyLoad(1, 2, 3, 4))

// 可实例化
// declare const F: CallMeWithNewToGetString
// const instantiation = new F()
// console.log(instantiation) //TODO F is not defined???

let fbs = fb(20)
console.log(fbs)
