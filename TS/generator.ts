/*
ES6에서 도입된 제너레이터(Generator) 함수는 이터러블을 생성하는 함수이다. 
제너레이터 함수를 사용하면 이터레이션 프로토콜을 준수해 이터러블을 생성하는 방식보다 간편하게 이터러블을 구현할 수 있다.
또한 제너레이터 함수는 비동기 처리에 유용하게 사용된다.
*/

function* genDecFunc() {
  yield 1;
  // .... 함수 선언문
}

const genExpFunc = function*() {
  yield 1;
  // ... 함수 표현식
}

const genObj = {
  * getMethod() {
    yield 1; // ... 메소드
  }
}

class GenClass {
  * generatorClassMethod() {
    yield 1; // .. 클래스 메소드
  }
}



const createInfinityByIteration = () => {
  let i = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      return {
        value: ++i,
      };
    }
  };
}

for(const n of createInfinityByIteration()) {
  if(n > 5) break;
  console.log(n);
}

// generator 

function* createInfinityByGenerator() {
  let i = 0;
  while(true) {
    yield ++i;
  }
}

for(const n of createInfinityByGenerator()) {
  if(n > 5) break;
  console.log(n);
}

function* counter() {
  console.log("first call");
  yield 1;
  console.log("second call");
  yield 2;
  console.log("third call");
}

const generatorObj = counter();

console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());

function* generatorFibonacci() {
  let [pre, cur] = [0, 1];
  while(true) {
    [pre, cur] = [cur, pre+cur];
    yield cur;
  }
}

const infinityFibo: Generator<number> = generatorFibonacci();

for(const n of infinityFibo) {
  if(n > 10) break;
  console.log(n);
}