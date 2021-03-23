// 泛型

interface Person {
    name: string;
    age: number;
  }
  
  interface R {
    size: number;
  }
  
  type PartialedPerson = Partial<Person>;
  
  let people: PartialedPerson = {
    name: "shine",
    age: 18,
  };
  
  function id<T extends R>(arg: T): T {
    return arg;
  }
  
  let a: R = {
    size: 10,
  };
  
  console.log(id(a));