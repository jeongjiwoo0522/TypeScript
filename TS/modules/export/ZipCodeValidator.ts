import { StringValidator } from "./StringValidator";

const numberRegExp = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator {
  isAsseptable(s: string) {
    return s.length === 5 && numberRegExp.test(s);
  }
}

export { ZipCodeValidator };

// 기존 validator의 이름을 변경 후 export 
export { ZipCodeValidator as MainCodeValidator };
