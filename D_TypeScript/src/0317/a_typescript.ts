// typescript
// : JS의 슈퍼셋이기 때문에 TS 파일을 JS파일로 변환해야만 코드 실행 가능

// 1. tsc로 TS 코드를 JS로 변환(컴파일)
// 2. node로 변환시킨 JS 코드를 실행
// -> TS 코드 수정 시 계속하여 JS 코드로 변환을 진행
// -> ts-node 명령어를 통해 코드 컴파일과 실행을 동시 진행 가능
//    : ts-node 명령어의 경우 JS 파일이 생성되지 않는다.
// -> npm install -g ts-node
{
console.log('ts-node를 사용하여 TS 파일을 실행합니다.');

const message = 'hello';
console.log(message.toUpperCase()); // 출력 X
// message(); - Error
// : TS는 코드 작성 시에 오류를 발견하고 알려줌
// : 예외가 아닌 실행 자체를 실패

// 자바스크립트 런타임은 코드가 실행될 때 코드의 오류가 존재한다면, 런타임 환경에서 오류를 작성
// -> 코드 한 줄 씩 읽다가 그 환경 자체에서 오류를 작성
// 타입 스크립트는 문장 자체 오류가 있으면 실행 자체를 하지 않는다.
}