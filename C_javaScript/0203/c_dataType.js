// ! 자바스크립트는 동적인 언어

// ! 자바스크립트의 자료형 (데이터 타입)
//   * 자료형의 종류 : 기본 자료형, 참조 자료형

// ? (기본) 자료형 
//   : 컴퓨터가 처리할 수 있는 자료의 형태

// typeof 변수명 : 자료형을 알 수 있는 함수

// * 숫자형 (number)
// : 정수, 실수, 10진수 그 외의 숫자 형태를 가리지 않고 사용 가능합니다.

let num = 10;
let float = 10.5;

console.log(typeof num); // 줄복사 alt + shift + 방향키
console.log(typeof float);

// * 1-2. 문자형 (string)
// : 텍스트 데이터를 나타내는 타입
// : 홑따옴표(''), 쌍따옴표(""), 백틱(``)으로 둘러싸서 표현

let str1 = 'hello';
let str2 = "javascript";
let str3 = `hello, Javascript`;

// ? 템플릿 문자열
// : 백틱을 사용하여 정의
// : 문자열 내에서 변수나 표현식 ${} 안에 넣어서 사용할 수 있도록 하는 문자열

// 변수 삽입
let name = '윤이정'; // 일반 변수 지정시 ; 따옴표 사용
let greeting = `안녕하세요 ${name}님`; // 템플릿 문자열 백틱 사용 (변수를 넣거나 등등)

console.log(greeting);

// 표현식 삽입
let num1 = 10;
let num2 = 20;

console.log(`num1 + num2 = ${num1 + num2}`);

// 여러 줄 문자열
// : 템플릿 문자열의 경우 여러 줄의 문자열 작성 가능

let multiLune = `
첫 번째 줄
두 번째 줄
세 번째 줄`;

console.log(multiLune);

// ? 논리형 데이터 타입 (boolean 불리언)
//   : 참(true), 거짓(false) 값만을 가지는 자료형

let bool1 = true;
let bool2 = false;

console.log(typeof bool1); //boolean
console.log(typeof bool2); //boolean
console.log(bool1); //true

// ! null & undefined 자료형

// ? null 
// : 값이 없음을 명시적으로 나타냄
// : 객체가 없음을 의미하는 값 (아무것도 참조하지 않음) >> 메모리 자체에 없다, 읽어 올 녀석이 없다!
// : (변수에 할당된) 데이터 값이 유효하지 않은 상태
// : 참조 - 주소값 (저장된 위치) , 변수 - 그릇을 만든다

console.log(null); //null

// ? undefined
// : 값이 할당되지 않은 변수의 기본 값
// : 변수 선언은 되었으나 아직 어떠한 값도 할당되지 않았을 경우
// : 선언만 하고 초기화하지 않으면 나타난다.

let hello;
console.log(hello);

// ? null 과 undefined의 비교
// 모두 값이 없음을 표현
// null은 값이 의도적으로 비어 있으며 undefined는 값이 아직 할당되지 않았다.

// ! 자료형 변환
// : 자료형이 다른 자료형으로 바뀌는 것
// : 문자, 숫자, 논리형의 자료형을 그 자신과 다른 자료형으로 바꾸는 것을 의미합니다.

// ? 문자열로 변환 (string)
// : String() 함수 또는 toString() 함수를 사용합니다.

let numberToString = String(123);
console.log(typeof numberToString);

// ? 숫자형으로 변환
// : Number() 함수를 사용합니다.

let stringToNumber = Number('123');
console.log(typeof stringToNumber);

// * 문자열이 숫자로 변환할 수 없는 경우
// : NaN 값을 도출 (Not a Number의 축약어)
//   - 어떤 값과도 동등하지 않습니다. (반드시 대문자 N)
//   - 어떤 수학적 연산이든 NaN을 만나면 결과값이 NaN이 됩니다.

let notANumber = Number('This is not a number');
console.log(notANumber); //NaN

// ? 논리형으로 변환
// : Boolean() 함수 사용
// : JS의 불리언 변환에서 : false, 0, '', null, undefined, NaN을 제외한 데이터는 모두 true로 간주합니다. (데이터가 모든지 있음 true로 간주한다)

let stringToBoolean = Boolean('Hello');
let numberToBoolean = Boolean(0);

console.log(stringToBoolean); // true
console.log(numberToBoolean); // false