// ! 자바스크립트 함수

// ? 함수 (기능 동작)
// : 특정 작업을 수행하거나 값을 계산하는데 사용되는 코드의 '집합'을 의미합니다.

// ? 함수의 특징

// 1. 재사용성
// : 한 번 정의하면 프로그램 내의 여러 위치에서 호출하여 사용이 가능합니다.

// 2. 모듈성
// : 복잡한 작업을 작은 단위로 구분지어 사용

// ? 함수 구현 방법
// function 의 키워드를 사용합니다.

// ? 기본구조 - 함수 선언문 형식
/* functon 함수명 (매개변수) {
    함수가 수행할 코드
    return 결과값;
}*/

// - 함수명 
// : 함수를 식별하는 이름
// : 주로 동사를 사용

// - 매개변수 (파라미터, parameter)
// : 함수에 입력으로 제공되는 값
// : 함수 내에서 해당 매개 변수를 사용하여 특정 작업을 수행

// - 결과값 (리턴값, return)
// : 함수가 작업을 완료한 후 반환하는 값
// : return 키워드를 사용하여 결과값을 반환


// ? 함수 선언 방식

// ! 1. 함수 선언문
// : 함수를 선언하는 가장 전통적인 방식
// : 호이스팅이 적용 
// : 함수를 선언되기 전에도 호출할 수 있음

// * 호이스팅 : 코드가 실행될 때 함수, 변수 등의 선언문이 해당 범위(파일)의 최상단으로 끌어 올려지는 현상

greet(); // 안녕하세요. (선언되기 전이지만 호이스팅이 적용되서 나옴)

function greet() { //greet : 인사하다

    console.log('안녕하세요.');

} // 함수를 생성

// 함수를 생성 -> 함수를 선언한다.
// 함수를 사용 -> 함수를 호출한다.

// * 함수 호출 방법 
// : 함수명(인자값); 

// * 인자값 (아규먼트, argrument)
// : 실제 계산을 위해 파라미터로 전달되는 값
// : 매개변수와 인자는 생략 가능


// ! 2. 함수 표현식
// : 함수를 변수에 할당하는 방식으로 함수를 정의
// : 호이스팅이 적용되지 않아 선언 이전에 호출이 불가합니다.

// ? 기본 구조 - 함수표현식

// const 변수명 = function(매개변수){
    // 함수 기능 작성
    // return 반환값;
// }

// * 익명함수
// : 함수명을 지정하지 않는 함수
// : 주로 함수 표현식에서 사용

// greeting(); -> Error 호이스팅이 되지 않음

const greeting = function() {

    console.log('함수 표현식을 사용하는 예제');

}

greeting(); //함수 표현식을 사용하는 예제



// ! 3. 화살표 함수
// : ES6 에서 도입된 형식
// : 함수를 보다 간결하게 표현
// : 주로 익명 함수로 사용
// : function 키워드를 사용하지 않는다.
// : 함수 본문 (기능 구현부)이 단일문으로 작성되는 경우 중괄호와 return 키워드 생략이 가능합니다.

// ? 기본 구조 - 화살표 함수

// const 변수명 = (매개변수) => {
    // 함수 기능 작성
// }

const hello = () => {
    console.log('화살표 함수를 사용하는 예제');
}

hello(); //화살표 함수를 사용하는 예제

const hi = name => console.log(`hi ${name}`);
hi('윤이정'); // hi 윤이정

// ! 함수 선언 방식에 대한 베스트 프렉티스
// : 일반적 상황에서는 함수 선언문 방식을 사용
// : 조건부 함수 선언 시 함수 표현식 방식을 사용
// : 콜백 함수 사용시 화살표 함수를 사용
// : 화살표 함수의 경우 this 바인딩이 다르게 동작