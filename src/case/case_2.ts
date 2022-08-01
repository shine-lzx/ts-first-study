// 索引签名
const foo: {
  [index: string]: { message: string }
} = {}

foo['name'] = { message: 'shine' }
console.log(foo.name.message)

type FromSomeIndex<K extends string> = { [key in K]: number }

type data = {
  name: string
  age: string
  hobby: string
}

type D = 'name' | 'age' | 'hobby'

const user: FromSomeIndex<D> = {
  name: 0,
  age: 0,
  hobby: 0,
}
