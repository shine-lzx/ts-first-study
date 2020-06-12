// 当你安装 TypeScript 时，会顺带安装 lib.d.ts 等声明文件。此文件包含了 JavaScript 运行时以及 DOM 中存在各种常见的环境声明。
// lib.d.ts 为【所有 JavaScript 对象】定义了 toString 方法。

const foo = 123

// 给window添加新方法
interface window {
  helloWorld(): void
}

// 全局变量 Math 在 lib.d.ts 中被定义为：

declare var Math: Math

interface Math {
  E: number
  LN10: number
  seedrandom(seed?: string): void
}

export { foo, window, Math }
