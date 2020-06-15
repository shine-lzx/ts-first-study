// TypeScript 的索引签名必须是 string 或者 number。
const myObj: any = {}

// 所有成员都必须符合字符串的索引签名
// 当你声明一个索引签名时，所有明确的成员都必须符合索引签名：
// interface Foo {
//   [key: string]: number
//   x: number
//   y: number
// }

// interface Foo {
//   [key: string]: number
//   x: number
// }

// Error

// interface Bar {
//   [key: string]: number
//   x: number
//   y: string // Error: y 属性必须为 number 类型
// }

// interface Foo {
//   [index: number]: string
//   (arg1: string, arg2: string): string
// }

// let myfun: Foo
// myfun = function (arg1, arg2): string {
//   return arg1 + arg2
// }

// 柯里化
let add = (x: number) => (y: number) => x + y

export { myObj, add }
