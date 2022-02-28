// 注解函数参数

// 内联式
function handlePrint(arg: string) {
  return arg
}

// 通过接口
interface FunTypeOne {
  arg: number
}

function handlePrintOne(arg: FunTypeOne) {
  return arg
}

interface FunTypeTwo {
  (arg1: number, arg2: number): number
}

let handlePrintTwo: FunTypeTwo = function (arg1: number, arg2: number): number {
  return arg1 + arg2
}

// 函数重载
function heavyLoad(a?: number, b?: number, c?: number, d?: any) {
  if (a && b) {
    a = b
  } else if (c && d) {
    c = d
  }
  return { top: a, right: b, bottom: c, left: d }
}

// 可实例化
interface CallMeWithNewToGetString {
  new (): string
}

function fb(index: number): number {
  if (index <= 2) {
    return 1
  } else {
    return fb(index - 1) + fb(index - 2)
  }
}

// 泛型箭头函数定义
const printList = <T>(items: T): T => {
  return items
}

// const foo = <T,>(x: T): T => x;

// const foo = <T extends {}>(x: T): T => x;

// const foo = <T extends Record<string, unknown>>(x: T): T => x;

// const foo: <T>(x: T) => T = x => x;

// const identity = <T,>(arg: T): T => {
//     console.log(arg);
//     return arg;
// };

// const renderAuthorize = <T>(Authorized: T): ((currentAuthority: CurrentAuthorityType) => T) => (
//     currentAuthority: CurrentAuthorityType,
//   ): T => {
//      return
//  };

function a<v1, v2>(v1: string, v2: string): v1 & v2

function a() {}

export {
  handlePrint,
  handlePrintTwo,
  heavyLoad,
  CallMeWithNewToGetString,
  fb,
  printList,
}
