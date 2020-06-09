// import { play } from '../utils/test'
// const handle = require('../utils/test')
// const handleTs = require('../utils/assert')
// // handle.play('羽毛球')
// // handle.alertName()

// let moreType: string | number

// moreType = 666

// // console.log(moreType)

// // console.log('==========>', handle.getLen(666))

// // 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
// interface Person {
//   readonly id: number
//   name: string
//   sex: string
//   age?: number // 可选属性
//   [propName: string]: number | string | undefined //TODO 为什么会存在undefined？？？
// }

// let shine: Person = {
//   id: 1,
//   name: 'shine-lzx',
//   sex: '男',
//   age: 18,
//   codeType: 'javascript',
// }

// console.log(shine)

// // 数组泛型
// let fibonacci: Array<any> = [1, 1, 2, 3, '5']

// console.log(fibonacci)

// interface NumberArray {
//   [propsArray: number]: number | string | Object
// }

// let newArr: NumberArray = ['1', 1, { name: 'shine' }]

// console.log('NumberArray-------------->', newArr)

// console.log('求和-------------》', handle.mySum(1, '2'))

// console.log(
//   '--------------------------------------------------------------------------'
// )

// interface Cat {
//   name: string
//   run(): void
// }
// interface Fish {
//   name: string
//   swim(): void
// }

// interface Dog {}

// let catKind: Cat = {
//   name: 'cheshire Cat',
//   run() {
//     console.log('cheshire Cat run')
//   },
// }

// let fishKind: Fish = {
//   name: 'tunny',
//   swim() {
//     console.log('tunny swim')
//   },
// }

// function getName(animal: Cat | Fish | Dog) {
//   ;(animal as Fish).swim()
// }

// getName(fishKind)

// // 将一个父类断言为更加具体的子类
// class ApiError extends Error {
//   code: number = 0
// }

// class HttpError extends Error {
//   statusCode: number = 200
// }

// let isApiError = (error: Error) => {
//   if (typeof (error as ApiError).code === 'number') {
//     return true
//   }
//   return false
// }

// let estimate = (flag: boolean) => {
//   flag ? console.log('200') : console.log('99999')
// }

// estimate(isApiError(new ApiError())) // '200'

// console.log(
//   '-------------------------------------------------------------------------'
// )

// let w = ((window as any)['foo'] = '0')
// console.log('window', w)

// interface Animal {
//   name: string
// }

// interface Cat {
//   name: string
//   run(): void
// }

// const animal: Animal = {
//   name: 'tom',
// }

// let tom = animal as Cat
// console.log(tom)

// //---------------------------------

import { getCacheData } from '../utils/genericity'

interface Cat {
  name: string
  run(): void
}

const tom = getCacheData<Cat>('tom')
tom.run()
