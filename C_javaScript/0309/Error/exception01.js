/*
! 구문 오류와 예외

? 1. 오류의 종류
: 프로그래밍 언어의 오류 (2가지)
- 프로그램 실행 전에 발생하는 "구문 오류"
- 프로그램 실행 중에 발생하는 "오류 (예외 또는 런타임 오류)"

? 2. 구문 오류
: 괄호의 짝이 다름, 문자열을 열었는데 닫지 않음
: 구문 자체의 오류가 있으면 웹 브라우저가 코드를 분석 조차 하지 않는다 -> 실행되지 않는다.

? 3. 런타임 오류 (예외)
: 실행 중에 발생하는 오류를 의미합니다.
: 코드가 순차적으로 실행되다가 오류가 위치하는 부분 이후에는 실행이 중단됩니다.
: (코드가 실행은 되지만 오류 부분부터 실행이 되지 않는다)

* 터미널 실행 단축키 ctrl + shift + `(백틱)

*/

// ! 구문 오류 예시

// ? StntaxError 발생 - 구문 오류
// : 오류 자체에 어떤 파일의 어느 위치에서 오류가 발생했는지 명시

console.log('----구문 오류 예제----');
console.log('프로그램이 시작되었습니다!');
// console.log('괄호를 닫지 않는 실수를 했습니다'
console.log('괄호를 닫지 않는 실수를 했습니다');


// ! 런타임 오류 (예외) 예시

// ? TypeError 발생 - 런타임 오류 (예외)
// : 자바스크립트는 StntaxError 라고 출력되는 오류 이외의 모든 오류가 예외(런타임 오류)로 분류
// : TypeError, ReferenceError, RangeError 등

console.log('---- 런타임 오류 (예외) 예시----');
console.log('프로그램이 시작되었습니다.'); 

// console.rog('log를 rog로 잘못 입력했습니다.');
// console.log('런타임 오류 발생 이후의 코드는 실행되지 않습니다.');
// -> 위의 예외는 오탈자 수정으로도 코드 해결이 가능하지만 오탈자 수정만으로 해결할 수 없는 예외도 존재합니다.


// ! JS 실행 중 발생하는 예외를 다루는 방법 => 예외 처리

// ? 1. 기본 예외 처리
//   : 조건문을 사용해서 예외가 발생하지 않도록 지정한다. -> 권장하지 않음!
//   : 로직의 복잡성이 증가한다.

document.addEventListener('DOMContentLoaded', () => {

    // HTML에 h1 요소가 존재하지 않음
    const h1 = document.querySelector('h1');
    // h1.textContent = '안녕하세요';

    // ReferenceError 발생 (document is not defined)
    // : HTML 웹문서(document)에서 참조할 h1 요소가 존재하지 않음

    // ? else 문으로 코드의 예외는 피했지만 예외를 처리하지 않았기 때문에 해당 예외 이후의 코드가 실행되지 않음
    // if(h1){
    //     h1.textContent = '안녕하세요';
    // }else{
    //     console.log('h1 태그를 추출할 수 없습니다.');
    // } // 개발자 도구에서 콘솔 창이 나타남!


});

// ? 2. 고급 예외 처리
//   : try catch finally 구문

/*
    try {
        : 예외가 발생할 가능성이 있는 코드
    }carch (exception) {
        : 예외가 발생했을 때 실행할 코드
    }finally {
        : 무조건 실행할 코드
        : 필요한 경우에만 사용 (선택사항)
    }
*/


try {
    willExcept.byeBye(); // 예외가 발생될 코드
    // 변수 자체도 없고 메서드도 존재하지 않는다, 존재하지 않는 녀석! (객체 자체가 존재하지 않음)
    // try 구문 안에서 예외가 발생하면 더 이상 try 구문을 진행하지 않고 catch 구문을 실행

    console.log('try 구문의 마지막 줄'); // 실행되지 않음

    // ! ReferenceError 발생 (document is not defined)

}catch(exception){

    console.log('catch 구문의 마지막 줄'); // 개발자 도구에서 나옴!

}finally{
    console.log('finally 구문의 마지막 줄'); // 상관 안 하고 무조건 나옴!
}


// ? finally 구문을 사용하는 이유
// : finaliy 구문 앞에는 return 이 있더라도 finally 구문은 반드시! 실행한다는 특성

function test() {

    try {
        alert('A 위치입니다.');
        throw "예외 강제 발생";
    }catch(exception) {
        alert('B 위치입니다.');
        return
    }

    // 출력되지 않는다, retern 키워드를 사용해 함수를 벗어났기 때문!
    alert('C 위치입니다.');

}

test();

function sample() {

    try {
        console.log('A 위치입니다.');
        throw "예외 강제 발생";
    }catch(exception) {
        console.log('B 위치입니다.');
        return
    }finally {
        console.log('C 위치입니다.');
    }

}

sample();

// sample 함수의 실행 시 A, B, C의 위치가 모두 출력


