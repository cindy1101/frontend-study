// ! 자바스크립트 비동기 프로그래밍 - async/await

// ! 1. Async/await의 정의
// : async 함수 내에서 await 키워드를 사용하여 비동기 작업이 완료될 때까지 함수의 실행을 일시적으로 멈춤

// ? async 함수 구조
async function fetchData() {
    // 비동기 작업을 수행
}

// ? await 키워드로 함수 실행 중지
// : 사용자의 정보를 가지고 오는 함수
// : await 키워드는 async 함수 내에서만 사용이 가능하다.
// : Promise가 완료될 때까지 기다림, 프로미스가 성공적으로 완료되면 결과 값을 반환하며 실패 시 예외를 발생 (비동기적 로직이 성공적으로 완료되면)

async function fetchUserData() {

    // fetch('url') 메서드
    // : 해당 url을 사용하여 서버와 통신을 하는 메서드

    let data = await fetch('https://api.example.com/data');
    let jsonData = await data.json();
    console.log(jsonData);

}

// ? 비동기 작업과 예외 처리
// : 비동기 작업은 외부 서버와의 통신 또는 다른 비즈니스 로직과의 결합이 많기 떄문에 코드 실행의 예외 발생 가능성이 높음
// : 주로 예외 처리의 코드와 함께 사용

async function fetchCustomerData() {

    try {
        let data = await fetch('https://api.example.com/data'); // 데이터를 가지고 와 담는다
        
        // 통신을 활용한 데이터에 상태에 문제가 있음
        if(!data.ok){
            throw new Error('Network response was not ok');
        }

        let jsonData = await data.json(); // 데이터를 제이슨으로 변환
        console.log(jsonData);

    } catch(error){
        console.log('Fetch Error: ', error.message);
    }

}

// async 키워드로 명시된 함수 외에는 일반적인 코드 실행 순서에 따라 동작
// : 비동기 함수의 실행 (통신을 통해 데이터를 가져옴)은 해당 로직의 실행 흐름에 따라 실행

// A -> B(비동기) -> C -> D
// A 실행하고 B가 아직 완료가 되지 않을 때 C와 D가 순차적으로 실행되며 D가 실행될 때 B가 실행되게끔
// await 는 데이터 가지고 올 때까지 좀 기다리라고... 그렇게 이해할까...?