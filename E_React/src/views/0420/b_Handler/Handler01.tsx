import React from 'react'
/*
    - 버튼 클릭 시 일어날 로직 정리
    : 버튼 클릭 시 console 창에 버튼을 클릭하였습니다. 출력
*/

export default function Handler01() {
    
    // 1. 보통 (이벤트를 실행시킬 요소가 담긴) 컴포넌트 내부에서 정의된다.
    // 2. handle 키워드로 함수가 시작 + 이벤트 이름을 작성
    // -> 관례적으로는 이벤트 이름을 따라 작성한다.
    // -> onChange = {handleChange}

    // ? 함수 정의 -> props 없이!
    function handleClick() {
        console.log('버튼을 클릭하였습니다.');
    }


    // # 함수 호출
    // : 기존 함수 호출은 함수명()을 붙였지만, () 붙이면 안 된다!
    // : 랜더링 함수를 호출할 경우 화면이 렌더링 되는 즉시 함수가 실행되어 버린다. = 파일 읽어서 내려올 때 함수 실행시킨다. 

  
    return (
    <div>
        {/* 
            - 버튼 요소에 이벤트 '전달' - prop 속성으로 '전달' = 버튼 요소에 prop 속성으로 이벤트 '전달'
            - 이벤트 핸들러에 전달된 함수는 호출되지 않아야 한다.
            : 랜더링 함수를 호출할 경우 화면이 렌더링 되는 즉시 함수가 실행되어 버린다. = 파일 읽어서 내려올 때 함수 실행시킨다. 
        */}
        <button onClick={handleClick}>
            클릭
        </button>
        
        <button onClick={function handleClick2(){
            console.log('TSX 내에서 이벤트 핸들러를 인라인으로 정의');
        }}>
            클릭 2
        </button>

        <button onClick={() => {
            console.log('화살표 함수 사용하여 간결하게 작성');
        }}>클릭 3</button>
    </div>
  )
}
