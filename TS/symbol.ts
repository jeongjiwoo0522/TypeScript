const mySymbol: symbol = Symbol("123");
console.log(mySymbol);
// symbol type은 new 연산자로 생성하지 않음
// 매개변수로 전달하는 문자열은 단순히 설명용

class Obj {
  public x: string;
  public mySymbol: symbol;
  constructor(x: string, mySymbol: symbol) {
    this.x = x;
    this.mySymbol = mySymbol
  }
}

const obj = new Obj("hello", mySymbol);
console.log(obj);

// Symbol iterator 

// 배열에는 Array.prototype[Symbol.iterator] 메소드가 구현되어있다.
const iterable: string[] = ["a", "b", "c"];

const iterator: IterableIterator<string> = iterable[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());