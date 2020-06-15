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
import { Person, You, Realize } from './Test/interfaceType/index'

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
import { foo, window } from './Test/lib.d.ts/index'
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
import { heavyLoad, fb } from './Test/fun/index'
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

//类型
// import { SelfType, selfFoo, fail, Square, area } from './Test/manyTypes/index'
// let manyType: SelfType = {
//   name: 'shine-lzx',
// }

// console.log('自定义类型', manyType)
// console.log('自定义类型', selfFoo('1', '2'))
// fail('使用never')

// let s: Square = {
//   kind: 'square',
//   size: 5,
// }

// console.log(area(s))

//索引签名
import { myObj, add } from './Test/theIndexSign/index'
const obj = {
  toString() {
    return 'Hello'
  },
}
myObj[obj.toString()] = 'World'

try {
  throw new Error('Something bad happened')
} catch (error) {
  console.log(error)
}

console.log('myObj', myObj)

console.log(add(123))
let add123 = add(123)
console.log(add123(456))
console.log(add(123)(456))
