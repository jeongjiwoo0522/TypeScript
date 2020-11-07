export * from "./StringValidator"; //stringValidator 인터페이스를 내보냄 
export * from "./ZipCodeValidator"; // 변수와 클래스를 내보냄 
export * from "./ParseIntBasedZipCodeValidator" // 'ParseIntBasedZipCodeValidator' 클래스를 내보냄
// 'ZipCodeValidator.ts' 모듈 에 있는
// 'ZipCodeValidator' 클래스를
// 'RegExpBasedZipCodeValidator' 라는 별칭으로 다시 내보냄
// 

export default () => {
  console.log("This is typescript");
}
