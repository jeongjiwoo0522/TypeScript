import { range } from "lodash";

function identify(arg: number): number {
  return arg;
}
// 변수에 특정 타입을 정의해야 하기 때문에 타입이 다르면 다시 정의해야한다

function any(arg: any): any {
  return arg;
}
// 변수에 특정한 타입이 없어서 무슨 값이든지 반환값이 될 수 있다 

function generic<T>(arg: T): T {
  return arg;
}

// 호출하는 방법

let output = generic<string>("MyString");
console.log(output);

output = generic("newString");
console.log(output);

// Generic class

class GenericNumber<T> {
  constructor(
    public zeroData: T,
    public add: (x: T, y: T) => T,
  ){}
}

let myGenericClass = new GenericNumber<number>(0, (x: number, y: number) => {
  return x + y;
});

console.log(myGenericClass.add(3, 9));
