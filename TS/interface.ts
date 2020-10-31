/*
type 체크에 사용되는 변수, 함수, 클래스에 사용한다. 
여러가지 타입의 프로퍼티로 이루어진 새로운 타입을 정의한다
 */

 // 인터페이스는 변수의 타입으로 사용 할 수 있다. 
 // 변수는 해당 인터페이스를 준수하여야한다.

interface Todo {
   id: number;
   content: string;
   completed: boolean;
}

let todo: Todo;
todo = { id: 1, content: "TypeScript", completed: false };

let todoList: Todo[] = [];

const addTodo = (todo: Todo): void => {
  //todoList = [... todoList, todo];
  todoList.push(todo);
}

const newTodo: Todo = { id: 2, content: "ddd", completed: false };

addTodo(todo);
addTodo(newTodo);

console.log(todoList);


// 함수와 인터페이스
// 파라미터와 리턴 값을 정의해 함수 타입 인터페이스를 정의

interface SquareFunc {
  (number: number): number;
}

const squareFunc: SquareFunc = (num: number): number => {
  return num*num;
}

console.log(squareFunc(10));

// 클래스와 인터페이스 

// 클래스 선언문 implements 뒤에 인터페이스 명을 선언하면 해당 클래스는 
// 지정된 인터페이스를 반드시 구현해야한다. 

class ClassTodo implements Todo {
  constructor(
    public id: number,
    public content: string,
    public completed: boolean
  ) {}
}

const classTodo = new ClassTodo(3, "auth", false);
console.log(classTodo);

// 인터페이스를 구현하는 클래스는 프로퍼티와 추상 메소드를 반드시 구현해야한다.

interface IPerson {
  name: string;
  sayHello(): void;
}

class CPerson implements IPerson {
  constructor(public name: string) {}
  sayHello(): void {
    console.log(`Hello ${this.name}`);
  }
}

const me = new CPerson("jisoo");
me.sayHello();

/*
덕 타이핑 ( Duck typing )
인터페이스를 구현하지 않아도 인터페이스 안의 프로퍼티나 메소드를 구현하였다면
그 인터페이스를 구현한 것으로 인정하여 타입체크를 통과한다
*/

interface IDuck {
  quack(): void;
}

class MallarDuck implements IDuck {
  quack(): void {
    console.log("Quack");
  }
}

class RedHeadDuck {
  quack(): void {
    console.log("q~uack");
  }
}

function makeSomeNoise(duck: IDuck): void {
  duck.quack();
} 

makeSomeNoise(new MallarDuck());
makeSomeNoise(new RedHeadDuck());


function sayHello(person: IPerson): void {
  console.log(`Hello ${person.name}`);
}

const you = { name: "jiin", age: 15, sayHello: () => {} };
sayHello(you);

/** 
 선택적 프로퍼티 Optional Property
 인터페이스의 프로퍼티는 반드시 구현되야 하지만 
 선택적 프로퍼티는 ?를 붙이며 생략해도 에러가 나지 않는다 
 */

interface UserInfo {
  username: string;
  password: string;
  age?    : number;
  address?: string;
}

const userinfo: UserInfo = {
  username: "string",
  password: "123123",
}

console.log(userinfo);