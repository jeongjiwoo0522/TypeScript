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
class Bar extends Foo {
    constructor(x, y, z) {
        super(x, y, z);
        console.log(this.x);
        //console.log(this.y); private는 상속받은 클래스에서 참조할 수 없다
        console.log(this.z);
    }
}
// 클래스 생성자 파라미터에 접근제어자를 선언할 수도 있다.
class Val {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        /*
        접근 제어자가 생성된 파라미터 x는 멤버변수로 자동으로 초기화된다.
        */
    }
}
const val = new Val("Hello", "World");
console.log(val);
console.log(val.x);
// console.log(val.y) // private 멤버 변수는 클래스 내부에서만 참조 가능하다 
// readonly keyword
// readonly 키워드로 선언된 프로퍼티는 선언시 혹은 생성자 함수 내에서만 값을 할당할 수 있다.
class Log {
    constructor() {
        this.MAX_LEN = 5;
        this.MSG = "Hello";
    }
    log() {
        // readonly가 선언된 프로퍼티는 재할당이 금지된다.
        //this.MAX_LEN = 10;
        //this.MSG = "hi";
        console.log(`MAX_LEN: ${this.MAX_LEN}`); // MAX_LEN: 5
        console.log(`MSG: ${this.MSG}`); // MSG: hello
    }
}
const log = new Log();
log.log();
// static keyword
// static 키워드로 생성된 메소드, 프로퍼티는 클래스 이름으로 참조
class Static {
    constructor(prop) {
        this.prop = prop;
        Static.instanceCount++;
    }
    static staticMethod() {
        return "staticMethod";
    }
    prototypeMethod() {
        return this.prop;
    }
}
Static.instanceCount = 0;
const sta1 = new Static("Hello");
const sta2 = new Static(1);
console.log(Static.instanceCount);
console.log(Static.staticMethod());
console.log(sta1.prototypeMethod());
console.log(sta2.prototypeMethod());
