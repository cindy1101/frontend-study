// ! 이벤트 모델
// : 이벤트를 연결하는 방법
// : 표준 이벤트 모델 (addEventListener("이벤트형식", 콜백함수))
// , on_키워드로 시작되는 고전 이벤트 모델
// , HTML 요소에 on_키워드를 직접 사용하는 인라인 이벤트 모델

// : 모든 이벤트 모델의 이벤트 리스너는 첫 번째 매개변수로 이벤트 객체를 전달 받음

// ? 키보드 이벤트
// - keydown : 키를 눌렀을 때 실행
// - keyup : 키보드가 키가 떨어질 때 실행

// ? 키보드 키 코드 사용하기
// : 키보드 이벤트가 발생할 때 이벤트 객체로 어떤 키가 눌러졌는지와 관련된 속성들이 저장됩니다.
// - code : 입력한 키가 무엇인지 (문자형 자료)
// - keyCode : 입력한 키를 나타내는 숫자 (숫자형 자료)
// - altkey : alt 키를 눌렀는지 (불 자료형)
// - ctrlkey : ctrl 키를 눌렀는지 (불 자료형)
// - shiftkey : shift 키를 눌렀는지 (불 자료형)

document.addEventListener('DOMContentLoaded', () => {

    const textarea = document.querySelector('textarea');
    const h2 = document.querySelector('h2');

    textarea.addEventListener('keyup', (event) => {

        // value 속성으로 입력 양식의 글자를 읽어오기 가능하다.
        // 객체.속성명 : 속성의 값을 가져오기 가능하다
        //            : getAttribute() 메서드의 기능과 동일
        // textarea 문서 객체 변수로 문서 객체의 value 속성을 추출

        const length = textarea.value.length;

        h2.textContent = `글자 수 : ${length}`;

        // 키보드 인식은 영미권과 아시아권의 글자 작성법의 차이로 keyup 지정 시 글자 하나의 수를 측정

    });

    // ! event 속성 사용하기
    // : 이벤트 추가 시 이벤트 리스너(콜백함수)는 첫번 째 매개변수로 '이벤트 객체'를 전달 받음

    const header3 = document.querySelector('h3');
    const print = (event) => {

        let output = '';

        // 이벤트 객체 내의 속성에 접근
        // event.속성명
        output += `alt: ${event.altkey} / `;
        output += `ctrl: ${event.ctrlKey} / `;
        output += `shift: ${event.shiftKey} / `;
        output += `code : ${typeof(event.code) !== 'undefined' ? event.code : event.keyCode}`

        // 타입 지정했을 때 아무런 입력 지정 안 될 때 event.keyCode
        // 입력 지정 됐을 때 event.code

        header3.textContent = output;
    }

    document.addEventListener('keyup', print);

});

// ! 이벤트 리스너를 외부로 빼낸 경우
// : 이벤트 리스너 내부에서 변수에 접근할 수 없는 경우

// ? 이벤트를 발생시킨 객체 (현재 코드의 textarea)에 접근하는 방법

// 1. event.currentTarget 속성을 사용
// : 위에서의 event는 매개변수로써 다른 이름 사용 가능
// : 일반 function 키워드 함수와 화살표 함수 모두 사용 가능하다

// 2. this 키워드 사용
// : 일반 function 키워드로 함수를 선언한 경우에만 사용이 가능하다.
//   (화살표 함수 사용 불가)

const linstener = (event) => {

    // 현재 블록에서는 textarea 변수를 사용할 수 없다.
    // const length = textarea.value.length;

    // event.currentTarget이 textarea로 지정
    // const length = event.currentTarget.value.length;
    // h1.textContent = `글자 수 : ${length}`;


    //this 가 textarea 로 지정
    const length = this.value.length;
    h4.textContent = `글자 수 : ${length}`;

}

// 이벤트 리스너가 외부로 분리되었기 때문이다.
document.addEventListener('DOMContentLoaded', () => {
    
    const textarea = document.querySelector('textarea');
    const h4 = document.querySelector('h4');

    textarea.addEventListener('keyup', linstener);

});