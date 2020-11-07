export default class ParseIntBasedZipCodeValidator {
  isAsseptable(s: string) {
    return s.length === 5 && parseInt(s).toString() === s;
  }
}

// 기존 validator의 이름을 변경 후 export
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from "./ZipCodeValidator";