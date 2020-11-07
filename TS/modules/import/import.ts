import { ZipCodeValidator } from "../export/ZipCodeValidator";

// 단일 export를 import하기 
const zipCodeValidator = new ZipCodeValidator();

// 이름을 바꾸어 import하기 
import { ZipCodeValidator as ZCV } from "../export/ZipCodeValidator";

const myValidator = new ZCV();

// 전체 모듈을 단일 변수로 import 

import * as validator from "../export/ZipCodeValidator";

const val = new validator.ZipCodeValidator();

// default로 선언한 클래스 or 함수 불러오기 
// default는 여러개 내보낼 수 없다 

import vali from "../export/ParseIntBasedZipCodeValidator";

const myVal = new vali();

import myFunc from "../export/AllValidator";

myFunc();