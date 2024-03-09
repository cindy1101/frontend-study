document.addEventListener('DOMContentLoaded', () => {

    const header = document.createElement('h1');

    header.textContent = '문서 객체 동적으로 생성하기';
    header.setAttribute = 'data-custom','사용자 정의 속성';
    header.style.color = 'white';
    header.style.backgroundColor = 'black';

    // 트리 개념을 사용하여 부모 객체인 body 아래에 자식 header를 추가
    // : 자바스크립트가 전체가 다 로드 됐을 때 로드 된 이후에 동작된다, 그래서 첫 번째 두 번째 밑에 나타남
    document.body.appendChild(header);

    // ! 문서 객체 이동하기
    const divA = document.querySelector('#first');
    const divB = document.querySelector('#second');
    const h1 = document.createElement('h1'); //선택자의 문자열 (생성하는 태그, 변하지 않으니까! querySelector 도 마찬가지!)

    h1.textContent = '이동하는 h1 태그';

    // 서로 번갈아가면서 실행하는 함수를 구현

    const toFirst = () => {
        divA.appendChild(h1); //객체 그 자체 변수 이름!
        setTimeout(toSecond,1000);
    }

    // #frist 안에 h1을 자식 요소로 넣는다
    // toSecond 가 1초마다 실행된다.

    const toSecond = () => {
        divB.appendChild(h1);
        setTimeout(toFirst,1000);
    }

    // #second 안에 h1을 자식 요소로 넣는다
    // toFirst 가 1초마다 실행된다.

    toFirst();


    // ! 문서 객체 제거하기

    setTimeout(() => {

        const h3 = document.querySelector('h3');

        h3.parentNode.removeChild(h3);
        // : h3 태그의 부모 객체에 접근하여 제거

        // document.body.removeChild(h3);
        // document.body로 h3의 부모 객체를 직접 지정

    }, 3000);
 
});