/*

! 예외 객체
: 예외가 발생하면 예외와 발생된 정보를 확인할 수 있는 객체

? 예외 객체는 carch 블럭의 괄호 안에 입력되며 주로 exception 또는 e라는 식별자를 사용합니다. (exception | e)
: 예외 객체가 가지는 속성은 name (예외 이름), message (예외 메시지)

! 예외 강제 발생
: throw 키워드를 발생

? 단순 예외 발생
: throw "문자열"

? 조금 더 자세하게 예외를 발생
: throw new Error ("문자열")

*/

try {
    const array = new Array(9999999999999999999999999999999999);
}catch(exception){

    console.log(exception);
    console.log();
    // RangeError
    console.log(`예외이름 : ${exception.name}`);
    // Invalid array length
    console.log(`예외 메시지 : ${exception.message}`);

}

// throw("문자열"); // 문자열
// throw new Error("문자열"); //throw new Error("문자열");

function divide(a, b) {
    if (b === 0) {
        throw '0으로는 나눌 수 없습니다.';
    }

    return a / b;
}

console.log(divide(10,2)); //5
// console.log(divide(10,0)); -> (출력) 0으로는 나눌 수 없습니다.

// ? 프로그래밍 구현 중 비즈니스 로직에 따라 개발자가 코드의 흐름을 제어하기 위해서 적절한 예외를 사용하는 것을 권장
// (예) 회원가입 시 비밀번호 설정을 문자 + 숫자로 8 ~ 10자 이낼 지정
//      그 외로 지정하는 경우 회원가입 로직이 실행되지 않도록 예외를 발생


function text(object) {

    // 정의되지 않음의 예외

    if(object.a !== undefined && object.b !== undefined){
        // 존재하지 않는 것들을 더함으로써 발생하는 예외
        console.log(object.a + object.b);
    }else {
        // 첫 번째 예외 발생 시 에러 발생
        throw new Error('a 속성과 b 속성을 지정하지 않았습니다.');
        // : 사용자에게 코드의 문제점을 인지시키고 해결 가능
    }

}

text();