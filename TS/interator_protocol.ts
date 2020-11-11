const array: number[] = [1, 2, 3];

// 배열은 Symbol.iterator 메소드를 소유한다.
// 따라서 배열은 이터러블 프로토콜을 준수한 이터러블이다.
console.log(Symbol.iterator in array); // true

// 이터러블 프로토콜을 준수한 배열은 for...of 문에서 순회 가능하다.
for (const item of array) {
  console.log(item);
}

/*
이터러블 프로토콜을 준수한 객체를 이터러블이라 한다. 
이터러블은 Symbol.iterator 메소드를 구현하거나 프로토타입 체인에 의해 상속한 객체를 말한다. 
Symbol.iterator 메소드는 이터레이터를 반환한다. 이터러블은 for…of 문에서 순회할 수 있으며 Spread 문
법의 대상으로 사용할 수 있다 - 순회 가능한 자료구조 

 이터레이터 프로토콜은 next 메소드를 소유하며 next메소드를 호출하면 이터러블을 순회라며 value, done 프로터피를 
 갖는 이터레이터 리절트 객체를 반환하는 것이다. 이 규약을 준수한 객체가 이터레이터이다.  - 이터러블의 요소를 탐색하는 객체 
 */


const fibonacci =  {
  [Symbol.iterator] () {
    let [pre, cur] = [0, 1];
    const max = 10;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return {
          value: cur,
          done: cur > max,
        }
      }
    }
  }
}

for(const num of fibonacci) {
  console.log(num);
}

const fiboIter = fibonacci[Symbol.iterator]();
console.log(fiboIter.next());
console.log(fiboIter.next());
console.log(fiboIter.next());

// 이터러블이면서 이터래이터인 객체 

const fibonacciFunc = (max: number) => {
  let [pre, cur] = [0, 1];
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [pre, cur] = [cur, pre+cur];
      return {
        value: cur,
        done: cur > max,
      };
    }
  }
}

const iter = fibonacciFunc(10); 
// iter는 이터래이터면서 이터러블이다
for(const num of iter) {
  console.log(num);
} 