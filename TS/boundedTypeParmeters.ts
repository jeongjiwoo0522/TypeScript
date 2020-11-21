// 제네릭 타입을 string으로 제한

function concat<T extends string>(strs: T, strs2: T) {
  return strs + strs2;
}

console.log(concat<string>("abc", "123"));

type stringAndNumber = string | number;


// 타입 매개변수간의 연산이 안될 경우 오버로드 함수를 이용
function plusOperation<T>(str1: T, str2: T): T;
function plusOperation(str1: any, str2: any) {
  return str1 + str2;
}

console.log(plusOperation<stringAndNumber>(1, "asdf"));
