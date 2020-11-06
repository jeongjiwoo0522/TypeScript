interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  const newSquare = { color: "white", area: 10 };
  if(config.color) {
    newSquare.color = config.color;
  }
  if(config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

interface Point {
  readonly x: number;
  readonly y: number;
}

let point: Point = { x: 10, y: 10 };

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

interface Prop {
  color: string;
  width: number;
  [propName: string]: any;
}

let prop: Prop = { color: "sfa", width: 10};
console.log(prop);

interface StringArray {
  [num: number]: string;
}

let myArray: StringArray;
myArray = ["dog", "cat"];
const myString: string = myArray[0];
console.log(myArray, myString);

interface ClockInterface {
  currentTime: Date,
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
  setTime(d : Date): void {}
}

