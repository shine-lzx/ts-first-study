import { type } from 'jquery'

type myType = string

interface SelfType {
  name: myType
}

type selfFun = (a: myType, b: myType) => void

const selfFoo: selfFun = (a, b) => {
  /* do something */
  return a + b
}

// let names: never = 5
function fail(message: string): never {
  throw new Error(message)
}

// 详细的检查 (联合类型)
interface Square {
  kind: 'square'
  size: number
}

interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}

// 有人仅仅是添加了 `Circle` 类型
// 我们可能希望 TypeScript 能在任何被需要的地方抛出错误
interface Circle {
  kind: 'circle'
  radius: number
}

type Shape = Square | Rectangle | Circle

// function area(s: Shape) {
//   if (s.kind === 'square') {
//     return s.size * s.size;
//   } else if (s.kind === 'rectangle') {
//     return s.width * s.height;
//   } else {
//     // Error: 'Circle' 不能被赋值给 'never'
//     const _exhaustiveCheck: never = s;
//   }
// }

// function area(s: Shape) {
//   if (s.kind === 'square') {
//     return s.size * s.size
//   } else if (s.kind === 'rectangle') {
//     return s.width * s.height
//   } else if (s.kind === 'circle') {
//     return Math.PI * s.radius ** 2
//   } else {
//     // ok
//     const _exhaustiveCheck: never = s
//   }
// }

function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.width * s.height
    case 'circle':
      return Math.PI * s.radius ** 2
    default:
      const _exhaustiveCheck: never = s
      return _exhaustiveCheck
  }
}

export { SelfType, selfFoo, fail, area, Square }
