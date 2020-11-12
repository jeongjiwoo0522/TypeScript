
// tuple types
const x: [number, string, boolean] = [16, "jiwoo", true];

console.log(typeof x, typeof x[0], typeof x[1], typeof x[2]);
console.log(x, ...x);

// generic type
const num: Array<number> = [];

num.push(1);
num.push(2);
num.push(12);

// void, null, undefined
type Func1 = (x: number) => void;

const myFunction: Func1 = (x: number) => {

}

const rhs: void = undefined;