export type NArray<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _NArray<T, N, []>
  : never
type _NArray<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _NArray<T, N, [T, ...R]>
type NArrayNumber<L extends number> = NArray<number, L>

// 加法
export type Add<M extends number, N extends number> = [
  ...NArrayNumber<M>,
  ...NArrayNumber<N>
]['length']

type Foo<A extends number, B extends number> = Add<A, B>
type Result = Foo<1, 2>
