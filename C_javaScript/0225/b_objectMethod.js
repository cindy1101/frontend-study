// ! 자바스크립트의 내장 객체 (Built-in Object)

// ? 1. JSON 객체
// : JavaScript Object Notation (JS 객체 표기법)

// * JSON의 구조
// : JSON 내부에는 JS에서 사용할 수 있는 기본 데이터 타입인 문자열, 숫자, 배열, 불리언 그 밖의 다른 객체 또한 포함이 가능함
// : JS의 배열과 객체를 활용하여, 어떠한 자료의 형태를 표현하는 방식이자 템플릿

// 'key-value' '키-값' 을 쌍으로 데이터를 구조화하는데 사용
// : 형태 자체는 JS의 객체와 유사하지만, JSON은 순수한 텍스트 형식이기 때문에 키를 항상 '따옴표'로 묶어야 함
// : 값에는 함수를 사용하지 못 합니다.
// : 문자열은 큰따옴표 사용을 권장합니다. (권장사항, 필수 아님!)

// ? JSON 의 사용
// : 서로 다른 시스템 간에 구조화된 데이터를 전송하는데 사용
// (설명) 다양한 언어 (자바, 타입스크립트 등) 다른 언어들이 존재함, 프로그램 지정하는 형식이 다 다름 (백, 프론트) 그 형태들이 다 달라서 읽어내지 못 할 수 있으니까 ㅜㅜ

// ? JSON 형태로 여러 자료형을 나타내는 방법
let data = [
    {
        name : "이승아",
        age : 28,
        job : "developer",
        hobby : {
            first : 'exercise',
            second : 'reading'
        },
        lecture : ['프론트엔드', '자바', 'DBMS']
    },
    {
        name : "이도경",
        age : 30,
        job : "employee",
        hobby : {
            first : 'baseball',
            second : 'health'
        },
        lecture : ['백엔드', '파이썬', 'Kotlin']
    }
]


// ? 1) JSON.stringify()
// : 자바스크립트 객체를 JSON 문자열로 변환
// : 데이터에 바로 적용 X - JSON 객체에 사용
console.log('들여쓰기 되어 있지 않은 JSON 데이터');
console.log(JSON.stringify(data));

// JSON.stringify()의 두번째 매개변수
// : 객체에서 어떤 속성만 선택해서 추출할 경우에 사용
// : 거의 사용하지 않음 (일반적으로 null을 사용)

// JSON.stringify()의 세번째 매개변수
// : 들여쓰기 N칸을 설정
console.log('들여쓰기 되어 있는 JSON 데이터');
console.log(JSON.stringify(data, null, 2));

// ? 2) JSON.parse()
// : JSON 문자열을 자바스크립트 객체로 변환

// JSON 문자열
let jsonData = JSON.stringify(data);
console.log('=== 자바스크립트 객체 출력 ===');
console.log(JSON.parse(jsonData));

// ! Math 내장 객체
// : 수학과 관련된 기본적인 연산을 할 때 사용되는 객체
// 속성 : PI

console.log(Math.PI); // 3.1415926 ... 

// 0 이상 1 미만의 난수를 생성
console.log(Math.random()); // 0 부터 1 미만의 난수(무작위 수)
console.log(Math.random() * 10); // 0 부터 10 미만의 난수(무작위 수)

// Math.floor
// : 숫자를 가장 가까운 정수로 내림
// : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
console.log(Math.floor(Math.random() * 10)); // 0 이상 10 미만의 정수를 무작위 수를 생성


// 제곱근 계산 : sqrt()
console.log(Math.sqrt(16)); //4
console.log(Math.sqrt(144)); //12


// ? Date 객체
// : 날짜와 시간을 처리하는 메서드를 제공

let now = new Date();
console.log(now); // 날짜와 시간을 출력
console.log(now.getDate()); // 일의 값
console.log(now.getDay()); // 요일의 값 (0부터 일요일)