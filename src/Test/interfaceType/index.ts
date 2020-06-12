// 定义变量、类、函数等的形状（参数类型，参数几个）

interface Person {
  name: string
  age: number
  hobby?: string
  // [props: number]: string | undefined  //TODO 类实现接口提示没有索引签名？？？
}

// 接口继承
interface You extends Person {
  work: string
}

// 可继承多个
interface Life extends You, Person {
  description: string
}

// 类实现接口
class Realize implements Life {
  name: string
  age: number
  work: string
  description: string
  constructor(name: string, age: number, work: string, description: string) {
    this.name = name
    this.age = age
    this.work = work
    this.description = description
  }
}

export { Person, You, Life, Realize }
