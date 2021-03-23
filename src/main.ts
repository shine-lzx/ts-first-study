import 'core-js'
// import {
//   NoYes,
//   handleChose,
//   ResultStatus,
//   Explain,
//   Hebdomad,
// } from "./Test/enumType/index";

// console.log(handleChose(NoYes.NO)); //否

// let status = new Explain(ResultStatus.Errors).outputStatus(ResultStatus.Errors);
// console.log("接口请求状态", status);

// console.log(Hebdomad.Monday);

// /**接口相关 */
// import { Person, You, Realize } from "./Test/interfaceType/index";

// // 接口实现
// let you: Person = {
//   name: "shine-lzx",
//   age: 18,
//   hobby: "play games",
// };

// console.log("你的名字", you.name, "你的年龄", you.age, "你的爱好？", you.hobby);

// let my: You = {
//   name: "shine-lzx",
//   age: 18,
//   work: "programmer",
// };

// console.log("my name is", my.name, "my work is", my.work);

// let life = new Realize("shine-lzx", 18, "programmer", "苦逼");
// console.log(life);

// /** lib.d.ts相关 */
// import { foo, window } from "./Test/lib.d.ts/index";
// const bar = foo.toString();
// console.log(bar);

// let win: window = {
//   helloWorld() {
//     console.log("hello World");
//   },
// };

// win.helloWorld();

// // Math.seedrandom('3.1415926') //TODO Uncaught TypeError: Cannot read property 'seedrandom' of undefined???

// /**函数相关 */
// import { heavyLoad, fb } from "./Test/fun/index";
// // let funOne = heavyLoad(1, 2)
// // console.log('funOne', funOne)
// console.log(heavyLoad(1));
// console.log(heavyLoad(1, 2));
// console.log(heavyLoad(1, 2, 3));
// console.log(heavyLoad(1, 2, 3, 4));

// // 可实例化
// // declare const F: CallMeWithNewToGetString
// // const instantiation = new F()
// // console.log(instantiation) //TODO F is not defined???

// let fbs = fb(20);
// console.log(fbs);

// //类型
// // import { SelfType, selfFoo, fail, Square, area } from './Test/manyTypes/index'
// // let manyType: SelfType = {
// //   name: 'shine-lzx',
// // }

// // console.log('自定义类型', manyType)
// // console.log('自定义类型', selfFoo('1', '2'))
// // fail('使用never')

// // let s: Square = {
// //   kind: 'square',
// //   size: 5,
// // }

// // console.log(area(s))

// //索引签名
// import { myObj, add } from "./Test/theIndexSign/index";
// const obj = {
//   toString() {
//     return "Hello";
//   },
// };
// myObj[obj.toString()] = "World";

// try {
//   throw new Error("Something bad happened");
// } catch (error) {
//   console.log(error);
// }

// console.log("myObj", myObj);

// console.log(add(123));
// console.log(add(123)(456));

// function id<T>(arg: T): T {
//   return arg;
// }

// console.log(id(666.66).toFixed())

// 泛型

// function id<T>(arg: T): T {
//   return arg;
// }
// id<number>(66666); // 这是ok的，也是最完整的写法
// id("lucifer"); // 基于类型推导，我们可以这样简写

// type A<T> = Array<T>;
// let a: A<boolean> = [true];
// console.log(a);

// type ListNode<T> = {
//   data: T;
//   next: ListNode<T> | null;
// };

// type DeepPartial<T> = T extends Function
//   ? T
//   : T extends object
//   ? { [P in keyof T]?: DeepPartial<T[P]> }
//   : T;

// type PartialedWindow = DeepPartial<Window>; // 现在window 上所有属性都变成了可选啦

// let arr = [[1, 2, 3], [2, 6666, 7777], [3], [4]];
// function flatt(arr: any) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       newArr.push(arr[i][j]);
//     }
//   }

//   return newArr;
// }

// console.log(flatt(arr));

function reverse<T>(items: T[]): T[] {
  const toreturn = []
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i])
  }
  return toreturn
}

const sample = [1, 2, 3]
let reversed = reverse(sample)

console.log(reversed) // 3, 2, 1

// const say = (arr: T[]): T[] => {
//   return []
// }

interface sayType {
  (person: string, content: string): boolean
}

// 不同于 interface 只能定义对象类型， type 声明的方式可以定义组合类型，交叉类型，原始类型。

// 如果用 type alias 声明的方式，会导致一些功能的缺失：

// interface 方式可以实现接口的 extends 和 implements ， 而 type alias 则不行。
// interface 可以实现接口的 merge ，但 type alias 则不行。

// type sayType = (person: string, content: string) => boolean
var say: sayType = function (person, content) {
  if (person === '' || content === '') return false
  console.log(`${person}say:${content}`)
  return true
}

say('2', '3')

function extend<T extends object, U extends object>(
  first: T,
  second: U
): T & U {
  const result = <T & U>{}
  for (let id in first) {
    ;(<T>result)[id] = first[id]
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      ;(<U>result)[id] = second[id]
    }
  }

  return result
}

const x = extend({ a: 'hello' }, { b: 42 })

// 为箭头函数定义泛型
// type Callback = (items: [object]) => void

// const printList = <T>(items: T): T => {
//   console.log(typeof items)
//   return items
// }

// let cc = printList([{}])
// console.log('cc: ', cc)

// // 遍历枚举，枚举本质是对象
// enum List {
//   menu_one = 10,
//   menu_two,
//   menu_three,
//   menu_four,
//   menu_five,
//   menu_six,
// }

// for (let x in List) {
//   // menu_one,menu_two, menu_three, menu_four, menu_five, menu_six, 0，1，2，3，4，5 ？？？？
//   console.log(List[x])
// }

// enum EvidenceTypeEnum {
//   UNKNOWN = '',
//   PASSPORT_VISA = 'passport_visa',
//   PASSPORT = 'passport',
//   SIGHTED_STUDENT_CARD = 'sighted_tertiary_edu_id',
//   SIGHTED_KEYPASS_CARD = 'sighted_keypass_card',
//   SIGHTED_PROOF_OF_AGE_CARD = 'sighted_proof_of_age_card',
// }

// let str = 'passport_visa'
// console.log(str === EvidenceTypeEnum.PASSPORT_VISA)

// enum Color {
//   Red,
//   Green,
//   Blue,
// }
// 为什么在多个枚举中要在第二个中初始化一个值？如果不进行初始化，那么前面的顺序与后面的顺序就会发生混乱
// enum Color {
//   DarkRed = 3,
//   DarkGreen,
//   DarkBlue,
// }

// console.log('Color: ', Color)
// console.log('Color: ', Color)
// console.log('Color: ', Color['Red'])

// window.helloWorld = () => {
//   console.log('hello world')
// }

// window.helloWorld()

const simple: (foo: number) => string = (foo) => foo.toString()

console.log(simple(1))
