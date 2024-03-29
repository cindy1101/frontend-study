// ! JS의 제어문 - 반복문

// ? 반복문 (loop)
// : 동일한 코드 블록을 여러 번 실행할 수 있도록 해주는 프로그래밍
// : 조건이 만족될 때까지 반복하여 실행할 수 있는 명령의 집합

// ? 반복문의 종류
// : for 문, while문, do-while문
// (for...in문, for...of문)

// ? 1. for 문
// : 주로 정해진 횟수만큼 반복할 때 사용

// * for 문의 기본 형태
/*
    for (초기화식; 조건식 ; 증감식){
        실행할 코드 블럭
    }

    - 초기화식 
    : 반복문이 시작될 때 단 한 번만 실행
    : 보통 카운터 변수라고도 불리는 변수를 초기화에 사용
    : 주로 숫자로 설정된 변수

    - 조건식
    : 종료 조건, 각 반복 사이클의 시작에서 평가되는 표현식
    : 해당 조건이 true이면 실행, false면 반복문이 종료

    - 증감식
    : 각 반복 사이클이 끝날 때 (반복문이 전체 반복을 완료할 때) 마다 실행
    : 일반적으로 카운터 변수를 증가 또는 감소시키는데 사용
*/

for (let i = 0; i < 5; i++){
    console.log(i);
}

// i 는 개발자 사이에서 index로 사용된다!

// i 는 초기화에서 0으로 시작
// 조건에서 i < 5가 참인 동안 반복문이 계속 실행
// 각 반복 사이클이 끝날 때마다 i가 1씩 증가

/*
    1. let index = 0;
    2. index < 5 -> true
    3. console.log(index)
    4. index++ -> 후위증가, 그래서 지금은 0

    1. index < 5 -> 이제 1이니까 true
    2. console.log(index) -> 1
    3. index++ -> 후위증가, 그래서 지금은 1

    1. index < 5 -> 이제 2이니까 true
    2. console.log(index) -> 2
    3. index++ -> 후위증가, 그래서 지금은 2

    1. index < 5 -> 이제 3이니까 true
    2. console.log(index) -> 3
    3. index++ -> 후위증가, 그래서 지금은 3

    1. index < 5 -> 이제 4이니까 true
    2. console.log(index) -> 4
    3. index++ -> 후위증가, 그래서 지금은 4

    1. index < 5 -> 이제 5이니까 false니까 끝.

 */


// ? while문
// : 주어진 조건이 참인 동안 코드 블록을 계속 실행
// : 조건이 변함없이 true인 경우 무한 루프가 됩니다.

// * while문의 기본 구조
/*
    while(조건){
        실행할 코드
    }
*/

let index = 0;

while(index < 5){
    console.log(index);
    index++; // 증감
}

// ? do-while문
// : while 반복문과 유사
// : 조건을 확인하기 전에 먼저 코드 블록을 실행
// >> 코드 블록이 최소한 한 번을 실행 보장 (while은 false면 아예 실행 안 하는데 얘는 한 번 실행은 한다)

// * do-while문의 기본 구조
/*
    do{
        실행할 코드
    }while(조건);
*/

let i = 0;

do {
    console.log(i);
    i++;
}while(i < 5);


// 1에서 20까지 숫자 중에서 3의 배수만 출력하는 코드 (for 반복문, if 조건문)

console.log('-----------반복문 예제----------');

for(let i = 1; i <= 20; i++){

    /*i에서 나누기 3에서 남은 나머지!*/
    if(i % 3 === 0){
        console.log(i);
    }

}




