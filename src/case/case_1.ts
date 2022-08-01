/*Partial*/

type Person = {
  name: string
  age: number
}

type T = keyof Person // "name" | "age"

type Keys = 'a' | 'b'

type Obj = {
  [p in Keys]: any
} // -> { a: any, b: any }

// type Partial<T> = { [P in keyof T]?: T[P] }

/*Record*/

// type Record<K extends keyof any, T> = { [P in K]: T }

type KEY = keyof any //即 string | number | symbol

interface CatInfo {
  age: number
  breed: string
}

type CatName = 'miffy' | 'boris' | 'mordred'

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
}
