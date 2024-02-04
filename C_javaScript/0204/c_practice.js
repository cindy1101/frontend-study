// ! JS 조건문 예제

let score = 71; // 점수를 저장할 변수

// ? 해당 결과가 출력되도록 임의의 값을 할당

// 1. 점수가 70점 이상인 경우 '합격'을 출력 (콘솔창)
// -> 해당 결과가 출력되도록 임의의 값을 할당

if (score >= 70){
    console.log('합격');
}

// 2. 점수가 60점 이상인 경우 '합격'을 출력
// -> 60점 미만인 경우 '불합격'을 출력

score = 60;

if (score >= 60){
    console.log('합격');
}else {
    console.log('불합격');
}

// 3. 점수가 0점 미만, 100점 초과인 경우 -> 점수가 잘못되었습니다 출력
// 90점 이상인 경우 A
// 80점 이상인 경우 B
// 70점 이상인 경우 C
// 그 외에는 D를 출력

score = -1;

if(score < 0 || score > 100){ // 0보다 작거나 100보다 크거나
    console.log('점수가 잘못 되었습니다.');
}else if(score >= 90){ // 90 이상 100 이하
    console.log('A');
}else if(score >= 80){ // 80 이상 89 이하
    console.log('B');
}else if(score >= 70){ // 70 이상 79 이하
    console.log('C');
}else{
    console.log('D'); // 0 이상 70 미만의 수
}

// >> 위의 else if 문을 switch문으로 변경
score = 71;

// switch의 조건으로 true를 입력
// : switch 문을 강제로 실행시킨다.
switch(true){

    // 점수의 범위를 축약 (유효성 검사)
    case score < 0 || score > 100 :
        console.log('잘못된 점수');
        break;
    
    case score >= 90 :
        console.log('A');
        break;

    case score >= 80 :
        console.log('B');
        break;

    case score >= 70 :
        console.log('C');
        break;

    default : 
        console.log('D');

}


// ! 논리연산자와 삼항연산자

console.log('------논리연산자와 삼항연산자-------')

true ? console.log('A') : console.log('B'); // true일 때 A가 출력된다
false ? console.log('B') : console.log('A'); // false일 때는 뒤에 있는 녀석이 출력된다.

// 논리합 
// a || b 는 a와 b 중 하나라도 true면 true를 반환
// : a || b에서 a가 true인 경우 b는 평가되지 않음
// : 특정 조건이 true일 때 추가적인 (필요없는) 연산자를 방지 
// -> 굳이 true이면 true라서 불필요하게 계산을 하지 않는다!

true || console.log('A'); // 안 나옴!

// 논리곱
// a && b는 a와 b 모두 true일 때만 true를 반환
// : a && b에서 a가 true여도 b를 계산
// : a && b에서 a가 false 인 경우 b는 평가하지 않음

true && console.log('A'); // 무조건 true일 때 무조건 나옴! -> 무언가 있으면 true
false && console.log('A'); // 하나라도 false면 있든 없든 실행되지 않음

// 회원 정보의 유무에 따른 페이지 접근 제한

let token = ''; //회원 정보가 없음
token && console.log('회원만 접근 가능한 페이지');

console.log('----------------------');

token = '회원';
token && console.log('회원만 접근 가능한 페이지');




