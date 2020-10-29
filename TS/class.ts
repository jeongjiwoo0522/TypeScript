class Person {
  // typescript는 클래스 몸체에 클래스 프로퍼티를 사전 정의해야한다.
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking`);
  }

};

const person = new Person("new");

person.walk();  

// 접근 제한자 typescript는 기본은 public

class Foo {
  public x: string;
  private y: string;
  protected z: string;

  constructor(x: string, y: string, z: string) {
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
  constructor(x: string, y: string, z: string) {
    super(x, y, z);

    console.log(this.x);
    //console.log(this.y); private는 상속받은 클래스에서 참조할 수 없다
    console.log(this.z);  
  }
}

