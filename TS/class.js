"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
}
;
const person = new Person("new");
person.walk();
// 접근 제한자 typescript는 기본은 public
class Foo {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const foo = new Foo("x", "y", "z");
console.log(foo.x);
//console.log(foo.y);
//console.log(foo.z); private, protected는 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
