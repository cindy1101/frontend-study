import React from 'react'

// ! 전통적인 이벤트 핸들링
// : 직접적인 바인딩이 일어난다, 이벤트 핸들러를 직접 DOM 요소에 바인딩(연결)한다.

// & 바인딩이란?
// : 구체적인 값을 DOM 요소에 지정한다.

document.getElementById('button')?.addEventListener('click',function(){
  console.log('버튼이 클릭되었습니다.')
});

// ! React의 이벤트 핸들링
// : 이벤트 위임이 일어난다, 모든 이벤트를 문서의 최상위에서 한 번에 처리
// -> 메모리와 성능을 최적화, 자동 클리닝 (합성 이벤트는 React가 관리함으로 컴포넌트가 언마운트 될 때 이벤트 리스너를 자동으로 정리)

// ? 합성 이벤트의 구조
// : 합성 이벤트는 모든 브라우저에서 일관된 속성과 메서드를 제공

// * type
// : 이벤트의 타입을 나타낸다.
// : click, change, submit 등

// * target
// : 이벤트가 발생한 DOM 요소를 가리킨다.
// : (예) 버튼 클릭 시 버튼에서 일어나는 동작을 말한다.

// * currentTarget
// : 이벤트 핸들러가 연결된 DOM 요소를 가리킨다.

//<div>
//    <button>A</button>
//    <button>B</button>
// </div>

// div에 이벤트를 등록한 후 A 버튼을 클릭했을 때, currentTarget는 div
// div에 이벤트를 등록한 후 A 버튼을 클릭했을 때, target는 button

// * preventDefault()
// : 이벤트의 기본 동작을 취소한다.
// : (예) submit 동작에 주로 사용한다.

// * stopPropagation()
// : 이벤트의 전파를 중지시킨다.
// : css 학습 시 부모 요소의 style을 적용하면 자식에게 상속되는 속성이 있듯 event에도 있다.

export default function Event02() {

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {

    // # 이벤트형 변환
    // : e 이벤트가 고정적으로 이벤트 형식으로 지정
    // : e.target을 HTML 요소 타입으로 형 변환
    
    const target = e.target as HTMLElement;

    console.log(`Button Clicked: ${e.type}`); // Button Clicked: click
    console.log(`현재 이벤트가 등록된 객체: ${e.currentTarget.tagName}`); // 현재 이벤트가 등록된 객체: DIV
    console.log(`이벤트가 실제 일어난 요소: ${target.tagName}`); // 이벤트가 실제 일어난 요소: [object HTMLButtonElement]
  }

  return (
    <div onClick={handleClick} style={{padding: '10px'}}>
      <button>Click Me</button>
      <p>버튼을 클릭해주세요.</p>
    </div>
  )
}
