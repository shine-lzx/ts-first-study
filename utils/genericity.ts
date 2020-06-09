// 泛型
// function getCacheData(key: string): any {
//   return (window as any).cache[key]
// }

function getCacheData<T>(key: string): T {
  return (window as any).cache[key]
}

export { getCacheData }
