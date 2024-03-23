console.log('Hello TypeScript');

// 위 코드 실행시 TS 파일 명령어를 실행하기 위해서는 해당 파일을 js 파일로 컴파일해야 함
// tsc 파일명.ts를 실행 시켜야한다.
// 그 이후에 컴파일 된 js 파일은 Node.js 런타임 환경에서 실행
// : node 파일명.js

// 0316 폴더 우클릭 후 통합 터미널 → tsc e_helloWorld.ts 작성 (같은 이름에 js 파일이 생성됨) → node e_helloWorld.js 입력 시 콘솔이 나타남!

//! ts 코드를 실시간으로 js로 컴파일 하고 실행
// ts-node를 설치해야 하며 npm install -g ts-node 

console.log('ts-node로 ts 파일 실행하기');

// ts-node 파일명.ts

// ts-node e_helloWorld.ts 작성 시 나타남, 설치 하면 되나 보지... 학원 가서 해보자...

// ? ts 파일의 경우 컴파일하지 않을 경우 js로 업데이트되지 않습니다.