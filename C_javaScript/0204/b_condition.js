// ! 자바스크립트의 제어문

// ? 제어문
// : 프로그램의 흐름을 제어하는 경우에 사용하는 실행문 (새로운 갈림길을 만들어준다?)
// -> '조건문', '반복문'

// ? 순차문
// : 코드가 위에서 아래로 순차적으로 실행되는 구문 (제어문과 반대 개념)

// ! 조건문 (Condition)
// : 프로그램에게 특정 조건을 검사하고, 그 결과에 따라 다른 행동을 하도록 명령하는 방식
// : 특정 조건에 따라 코드 블록을 실행 또는 건너뛰기가 가능하다.

// ! JS 조건문의 종류
// : if문, else문, else if문, switch문

// ? 1. if문
// : 가장 기본적인 조건문으로 특정 조건이 참이면 코드 블록을 실행합니다.
// : 주어진 조건이 참(true)일 때만 코드 블록을 실행
// : 주어진 조건이 거짓(false)이면 코드 블록은 무시

// * if 문의 기본 형태
/*
    if(조건){
        조건이 참일 때 실행할 코드
    }
*/

// -> 조건은 보통 비교 연산자를 사용해 표현한다. (동등, 일치, 부등호 - boolean 타입으로 반환)

console.log('----if문----');

let number = 10;

if(number > 0){
    // 만약 number가 0보다 크다면
    // console.log('') 출력한다!
    console.log('The number is positive');
}

if(number < 0){
    // 만약 number가 0보다 작다면
    // console.log('') 출력한다! -> false라서 무시합니당 ^0^
    console.log('The number is positive');
}

// 외부 환경에서는 순차적으로 진행 됨
console.log('순차문의 코드 진행');


// ? else 문
// : if문과 함께 사용되며 if문의 주어진 조건이 거짓일 때 실행할 코드 블록을 정의

// * else 문의 기본 형태
/*
    if(조건){

        조건이 참일 때 실행되는 코드

    }else {

        조건이 거짓일 때 실행되는 코드

    }
*/

console.log('--------else문--------');

number = -10; //재할당은 가능합니다!

if (number > 0) {
    // number가 0보다 클 때 실행합니다.
    console.log('The number is positive');
}else{
    // 거짓일 때 실행, 즉 0보다 작을 때
    console.log('The number is not positive');
}


// ? else if문
// : 여러 조건을 순차적으로 검사하고 싶을 때 사용합니다.
// : 첫 번째의 if 조건이 거짓이면, else if의 조건을 검사합니다.
// >> if문과 else문 사이에 위치, 여러개의 조건을 확인할 수 있게 해 주는 제어 구조

// * else if 문의 기본 형태
/*
    if(조건1){

        조건1이 참일 때 실행되는 코드

    }else if(조건2){

        조건1이 거짓이고 조건 2가 참일 때 실행되는 코드

    }else if(조건3){

        조건1과 조건2가 거짓이고, 조건3이 참일 때 실행되는 코드
        ...

    }else{

        모든 조건이 거짓일 때 실행되는 코드

    }
*/

console.log('-------else if문---------');

if(number > 0){
    // number가 0보다 커 -> 아니, 0보다 작아 -> 그럼 무시!
    console.log('양수입니다.');

}else if(number < 0){
    // number가 0보다 작아? -> 응! 0보다 작아 -> 그럼 실행!
    console.log('음수입니다.');

}else{
    // number가 두 가지 조건과 다 안 맞아? -> 조건 2 맞아, 그럼 무시!
    console.log('0입니다.');

}


// - 조건식에 true와 false 값과의 비교
// : booldean 타입에서 false 값으로 인식되는 값 (false, 0, '', null, undefined)
// : 위의 값을 제외하고는 true의 값을 반환하기 때문에 변수가 참인지 또는 그 값이 존재하는지를 테스트하기 위해서 변수 이름 그 자체를 사용할 수 있습니다.

// 조건식에서 변수명을 booldean 타입과 일치여부 확인을 하지 않아도 된다.
// 해당 변수를 불일치와 비교하고 싶은 경우 : 부정 논리를 사용 (!)

let cheese = 'Cheddar'
//let result = Boolean(cheese);

// 변수명 자체만으로 조건식을 할 경우 문자열 안에 내용이 있으니 true (변수명 자체만으로도 비교할 수 있다!)
if (cheese){
    console.log('치즈가 존재합니다.');
}else{
    console.log('치즈가 없습니다.');
}

// sheese !==true
if (!cheese){
    console.log('치즈가 없습니다.');
}else{
    console.log('치즈가 있습니다.'); //역전 시켰으니까!
}


// ? switch문
// : 하나의 표현식을 평가하고 그 값에 맞는 case 라벨로 코드 실행을 전환
// : 여러 가지 경우 중 하나를 선택하는데 사용

// * switch 문의 기본 구조
/*
    switch(식){
        case 값1 :
        식이 값1과 일치할 때 실행되는 코드
        
        case 값2 :
        식이 값2과 일치할 때 실행되는 코드

        case 값3 :
        식이 값3과 일치할 때 실행되는 코드
        ...
        default :
        식이 어떤 값과도 일치하지 않을 때 실행되는 코드
    }
*/

let fruit = 'banana';

// case의 값의 경우 조건식의 데이터와 같은 데이터타입을 가져야 함
switch (fruit) {
  // 줄 정렬 : 원하는 줄을 드래그 ctrl + k + f
  // 해당 파일 전체 정렬 : 마우스 커서 ctrl + k + f

  case "apple":
    console.log("사과");

    break;
  // break 문 (필수 X)
  // : 이전의 선택이 표현식의 값과 일치한다면 브라우저는 해당 코드 블록에서 실행을 멈추고 switch문 아래에 있는 코드로 이동
  // -> break를 만나면 switch 문 탈출!

  case "banana":
    console.log("바나나");

    break;

  case "orange":
    console.log("오렌지");

    break;

  default:
    console.log("일치하는 과일이 없습니다.");
}

// 하나의 중괄호를 띄고 있기 때문에 한 번에 코드 블록이 실행된다, 그래서 바나나 맞고 그 밑에 오렌지, 일치하는 과일이 없습니다가 나오는 거임.


// ! 삼항(조건)연산자
// : 조건에 따라 값을 반환하는 세 개의 피연산자를 가지는 식을 의미합니다. (항이 3개 - 연산자가 2개)
// : if-else 문을 더 간결하게 표현

// * 삼항(조건)연산자 기본 구조
/*
    조건? 표현식1 : 표현식2
    -> 주어진 조건을 평가한 후, 그 결과가 true면 표현식 1을 false면 표현식2를 실행한다.
*/

/*
    if(조건){
        표현식 1
    }else{
        표현식 2
    }
*/

let num = 11;
let message = num > 10 ? '10보다 크다.' : '10보다 작거나 같다'; 
console.log(message);

// 중첩 else if문과 삼항 연산자
// : JS의 if 조건문은 해당 조건들 내에서 또 다른 조건식을 작성할 수 있습니다.

   /*
   if(조건1){

        조건1이 참일 때 실행되는 코드

        if(조건2){
            조건1과 조건2가 모두 참일 때 실행될 코드
        } else {
            조건1은 참이지만 조건2는 거짓일 때 실행될 코드
        }

    }else{
        조건1이 거짓일 때 실행될 코드
    }
    */ 
// 50점 이상일 경우에는 시험 합격
// -> 90점 이상일 경우에는 A
// -> 80점 이상일 경우에는 B
// -> 그 외의 경우에는 C
// 50점 미만일 경우 불합격

let score = 10;

if (score >= 50){
    console.log('합격');

    if(score >= 90){
        console.log('A');
    }else if (score >= 80){
        console.log('B')
    }else{
        console.log('C')
    }
}else{
    console.log('불합격');
}

// 중첩 if 문을 삼항 연산자로 변환
let grade = score > 100 || score < 0 ? '존재하지 않은 점수' : score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : '탈락';

// score > 100 || score < 0 ? '존재하지 않은 점수' -> 첫번 째 조건 점수가 100점보다 높고 0점 보다 낮으면 존재하지 않은 점수야
// score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : '탈락'; -> 첫번 째 조건의 false 첫 번째 조건이 아니라면
// score >= 90 ? 'A'  -> 점수가 90점보다 높거나 같다면 A
// score >= 80 ? 'B' -> 점수가 90점보다 높거나 같지 않아, 그렇다면 90점보다 낮고 80점보다 높거나 같다면 B
// score >= 70 ? 'C' -> 점수가 80점 보다 높거나 같지 않아, 그렇다면 80점보다 낮고 70점보다 높거나 같다면 C
// : '탈락'; -> 저 모든 게 다 가짜면 탈락이야!


