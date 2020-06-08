import { play } from '../utils/test'
const handle = require('../utils/test')
const handleTs = require('../utils/assert')
// handle.play('羽毛球')
// handle.alertName()

let moreType: string | number

moreType = 666

// console.log(moreType)

// console.log('==========>', handle.getLen(666))

// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface Person {
  readonly id: number
  name: string
  sex: string
  age?: number // 可选属性
  [propName: string]: number | string | undefined //TODO 为什么会存在undefined？？？
}

let shine: Person = {
  id: 1,
  name: 'shine-lzx',
  sex: '男',
  age: 18,
  codeType: 'javascript',
}

console.log(shine)

// 数组泛型
let fibonacci: Array<any> = [1, 1, 2, 3, '5']

console.log(fibonacci)

interface NumberArray {
  [propsArray: number]: number | string | Object
}

let newArr: NumberArray = ['1', 1, { name: 'shine' }]

console.log('NumberArray-------------->', newArr)

console.log('求和-------------》', handle.mySum(1, '2'))

console.log(
  '--------------------------------------------------------------------------'
)

interface Cat {
  name: string
  run(): void
}
interface Fish {
  name: string
  swim(): void
}

let catKind: Cat = {
  name: 'cheshire Cat',
  run() {
    console.log('cheshire Cat run')
  },
}

let fishKind: Fish = {
  name: 'tunny',
  swim() {
    console.log('tunny swim')
  },
}

function getName(animal: Cat | Fish) {
  console.log(animal.name)
}

getName(catKind)
