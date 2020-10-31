"use strict";
/*
type 체크에 사용되는 변수, 함수, 클래스에 사용한다.
여러가지 타입의 프로퍼티로 이루어진 새로운 타입을 정의한다
 */
let todo;
todo = { id: 1, content: "TypeScript", completed: false };
let todoList = [];
const addTodo = (todo) => {
    //todoList = [... todoList, todo];
    todoList.push(todo);
};
const newTodo = { id: 2, content: "ddd", completed: false };
addTodo(todo);
addTodo(newTodo);
console.log(todoList);
const squareFunc = (num) => {
    return num * num;
};
console.log(squareFunc(10));
// 클래스와 인터페이스 
// 클래스 선언문 implements 뒤에 인터페이스 명을 선언하면 해당 클래스는 
// 지정된 인터페이스를 반드시 구현해야한다. 
class ClassTodo {
    constructor(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
}
const classTodo = new ClassTodo(3, "auth", false);
console.log(classTodo);
class CPerson {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}
const me = new CPerson("jisoo");
me.sayHello();
class MallarDuck {
    quack() {
        console.log("Quack");
    }
}
class RedHeadDuck {
    quack() {
        console.log("q~uack");
    }
}
function makeSomeNoise(duck) {
    duck.quack();
}
makeSomeNoise(new MallarDuck());
makeSomeNoise(new RedHeadDuck());
function sayHello(person) {
    console.log(`Hello ${person.name}`);
}
const you = { name: "jiin", age: 15, sayHello: () => { } };
sayHello(you);
const userinfo = {
    username: "string",
    password: "123123",
};
console.log(userinfo);
