// 가장 아래에 기능을 구현한 시그니처를 선언
// 위에 구체적인 타입을 명시한 함수의 시그니처를 쌓는 방식 

function add(a: number): number;
function add(a: number, c: string): number;
function add(a: any, b?: any): any {
  if(b === undefined) {
    return a;
  } else {
    return a + b;
  }
}

console.log(add(1, "asdf"));
console.log(add(1));

// 매개변수, 타입에 따라 다른 구현을 구현할 수 있다. 