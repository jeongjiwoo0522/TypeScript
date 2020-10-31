"use strict";
class Animal {
    // 일반 메소드
    move() {
        console.log("roaming the earth..");
    }
}
/*

추상 클래스는 하나 이상의 추상 클래스와 일반 메소드를 포함 할 수 있다.
추상 메소드는 메소드 이름과 타입만이 선언된 메소드
상속만을 위해 사용된다. 상속한 클래스는 추상 메소드를 반드시 정의해야 한다.

*/
// 직접 인스턴스를 생성할 수 없다 
// const animal = new Animal();
class Dog extends Animal {
    // 추상 클래를 상속한 클래스는 추상 클래스의 추상메소드를 반.드.시. 정의해야한다.
    makeSound() {
        console.log("멍멍");
    }
}
const dog = new Dog();
dog.makeSound();
dog.move();
// 인터페이스는 모든 메소드가 추상 메서드이다.
