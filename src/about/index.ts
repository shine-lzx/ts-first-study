// import { play } from '../utils/test'
// const handle = require('../utils/test')
// const handleTs = require('../utils/assert')
// // handle.play('羽毛球')
// // handle.alertName()
// import { type } from 'jquery'

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

// import { getCacheData } from '../utils/genericity'

// interface Cat {
//   name: string
//   run(): void
// }

// const tom = getCacheData<Cat>('tom')
// tom.run()

/*
import { name, getName, Animal, Directions, Options } from 'foo'

console.log(name)
let myName = getName()
let cat = new Animal('Tom')
let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
]
let options: Options = {
  data: {
    name: 'foo',
  },
}

*/

// let b: Boolean = new Boolean(1);
// let e: Error = new Error('Error occurred');
// let d: Date = new Date();
// let r: RegExp = /[a-z]/;

// let body: HTMLElement = document.body;
// let allDiv: NodeList = document.querySelectorAll('div');

// console.log(body)

// import $ from 'jquery'

// console.log($('#app'))

// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
// function getName(n: NameOrResolver): Name {
//     if (typeof n === 'string') {
//         return n;
//     } else {
//         return n();
//     }
// }

// console.log(getName('6'))

// class Animal {
//   public readonly name: string
//   protected constructor(name: string) {
//     this.name = name
//   }

//   public run(runType: string) {
//     console.log(this.name, runType)
//   }

//   static life(lifeStyle: string) {
//     console.log('name', this.name)
//     console.log(this.name, lifeStyle)
//   }
// }

// class Cat extends Animal {
//   public constructor(name: string) {
//     super(name)
//   }

//   eat(foods: string) {
//     console.log(this.name, 'eat', foods)
//   }
// }

// new Cat('🐱').eat('🐟')
// new Cat('bird').run('fly')
// Animal.life('6666')

// 抽象类是不允许被实例化的
// 抽象类中的抽象方法【必须】被子类实现
// abstract class Person {
//   public name: string
//   public constructor(name: string) {
//     this.name = name
//   }

//   abstract sayHi(msg: string): string
// }

// class Shine extends Person {
//   constructor(name: string) {
//     super(name)
//   }

//   sayHi(msg: string): string {
//     console.log(this.name, 'speek', msg)
//     return this.name
//   }
// }

// new Shine('lzx').sayHi('wdnmd')

// interface Alarm {
//   alert(arg: string): string
// }

// class Door {}

// class SecurityDoor extends Door implements Alarm {
//   alert(voice: string): string {
//     console.log(voice)
//     return voice
//   }
// }

// new SecurityDoor().alert('didi')

// interface PlaySport {
//   play(plays: string): string
// }

// interface Eat {
//   eatFoods(foods: string): string
// }

// 接口继承接口（此处继承【多个】类）
// interface Name extends Eat, PlaySport {
//   name(name: string): string
// }

// 类实现接口（此处【实现】多个接口）
// class Lzx implements Name, Eat, PlaySport {
//   a: number
//   b: number
//   c: number
//   constructor(a: number, b: number, c: number) {
//     this.a = a
//     this.b = b
//     this.c = c
//   }

//   name(name: string): string {
//     return name
//   }

//   eatFoods(foods: string): string {
//     return foods
//   }

//   play(plays: string): string {
//     return plays
//   }
// }

// 接口继承类
// interface You extends Lzx {
//   z: string
// }

// let people = new Lzx(1, 2, 3)
// console.log(people)
// console.log(people.eatFoods('meat'))

// let special: You = {
//   a: 1,
//   b: 2,
//   c: 3,
//   z: '666666',
//   name(name: string): string {
//     return name
//   },

//   eatFoods(foods: string): string {
//     return foods
//   },

//   play(plays: string): string {
//     return plays
//   },
// }

// console.log(special)

// function createArray<T>(length: number, value: T): Array<T> {
//   let result: T[] = []
//   for (let i = 0; i < length; i++) {
//     result[i] = value
//   }
//   return result
// }
// createArray(3, 'x') // ['x', 'x', 'x']

// function swap<T, U>(tuple: [T, U]): [U, T] {
//   return [tuple[1], tuple[0]]
// }

// swap([7, 'seven']) // ['seven', 7]

// interface L {
//   length: number
// }

// function MyArr<T extends L>(arg: T): T {
//   console.log('arg', arg.length)
//   return arg
// }

// MyArr([1, 2, 3, 4])

// 泛型类
// class Game<T> {
//   gameOne: T
//   constructor(gameName: T) {
//     this.gameOne = gameName
//   }

//   playGame<T>() {
//     console.log('playGame', this.gameOne)
//   }
// }

// new Game<string>('我的起源').playGame()

// 合并类型
// interface Start {
//   name: string,
//   age: number
// }

// interface Start {
//   name: number,
//   age: number
// }

// enum Color {
//   Red = 0,
//   Green = '66666',
//   Blue = 2,
// }
// let c: string = Color[0]
// console.log(c)

// interface U {
//   [props: string]: string
//   name: string
// }

// let init: U = {
//   name: '123',
//   age: '18',
//   sex: '男',
// }

// console.log(init)

// class Obj {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   msg(): void {}
// }

// let one = new Obj('lzx')
// let two = { ...one }
// two.msg()

// interface SearchFun {
//   (keyWord: string, num: string): boolean
// }

// let handleSearch: SearchFun
// handleSearch = function (keyWord: string, num: string) {
//   let result = keyWord.search(num)
//   return result > -1
// }

// handleSearch('搜索', '5')

// interface ReadonlyArrays {
//   year: string
// }

// interface interfaceClass extends ReadonlyArrays {
//   time: string
// }

// class Clock implements interfaceClass {
//   year: string
//   time: string
//   constructor(year: string, time: string) {
//     this.year = year
//     this.time = time
//     console.log(year, time)
//   }
// }

// new Clock('2020', '0611')