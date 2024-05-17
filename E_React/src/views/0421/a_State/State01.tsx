import React, { useState } from 'react'

// ! useState의 기본 작동 원리
// 1. useState Hook(기능) 호출 시 ()안에 인자는 '초기 상태값'
// 2. useState는 상태값 변수(count)와 해당 상태를 업데이트하는 함수 (setCount)를 배열 형태로 반환
// 3. 상태 업데이트 함수 호출 시 React는 새로운 상태값으로 컴포넌트를 재렌더링
// 4. 상태가 업데이트되면 React는 상태 변경을 감지하고 해당 컴포넌트를 비롯한 해당 상태를 의존(사용)하는 모든 컴포넌트를 재렌더링

// ! React 이벤트 객체의 타입 정의 (TS)

// ? 이벤트 타입 : 이벤트의 종류에 따라 다르게 표현
// ex) 입력 필드에 대한 변경 이벤트 : React.ChangeEvent
// ex) 클릭에 대한 이벤트 : React.MouseEvent

// ? 각 이벤트 타입은 제네릭을 통해 추가적인 DOM 요소 타입 지정 가능
// ex) button 요소의 클릭 이벤트 : React.MouseEvent<HTMLButtonElement>

/*

    ? 1. 마우스 이벤트 정의
    - 클릭 이벤트 : React.MouseEvent<>
    - 호버 이벤트 : React.MouseEvent<>

    ? 2. 키보드 이벤트
    - 키 다운 이벤트 : React.KeyboardEvent<>

    ? 3. 입력 변경 이벤트
    - 텍스트 입력 변경 이벤트 : React.ChangeEvent<>

    ? 4. 폼 이벤트
    - 폼 제출 이벤트 : React.FormEvent<> 
    -> 해당 이벤트를 사용할 경우 핸들러 로직에 폼 제출의 기본 동작을 방지 e.preventDefault();

    ! 이벤트 객체를 통한 요소의 접근

    # target
    : 이벤트가 최초로 발생한 요소를 가리킨다.
    : ex) 버튼이 포함된 리스트 아이템 li에 클릭 이벤트 핸들러가 있는 경우 버튼 클릭 시 이벤트가 가리키는 target은 해당 버튼이다!

    # currentTarget
    : 이벤트 리스너가 실제로 등록된 요소를 가리킨다.
    : ex) 위와 동일한 상황에서 버튼 클릭 시 이벤트가 가리키는 currentTarget은 클릭 이벤트 핸들러가 등록된 li 요소이다!

*/


export default function State01() {

    // ? count 상태 관리 (number)
    const [count, setCount] = useState<number>(0);

    // ? string, 문자 상태 관리
    const [name, setName] = useState<string>('기본값');

    // ? 키보드 상태 관리
    const [hobby, setHobby] = useState<string>('');
  
    // ? 이벤트 핸들러 함수 정의
    // : 카운트를 증가시키는 함수
    // e: React.MouseEvent<HTMLButtonElement> -> e에 대한 명시
    const handleTncrementHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

        // 이벤트가 바인딩 된 요소 -> button
        console.log(e.currentTarget);
        
        // count 값을 직접 증가하지 않는다.
        // : prevCount로 값을 대체하여 증가한다
        // : 함수형 업데이트라고 함
        setCount(prevCount => prevCount + 1);
    }

    // ? 이벤트 핸들러 함수 정의
    // : 작성시 기본값 바뀌게
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget);
        setName(e.target.value);
        // text의 타겟을 잡아서!

        // setName(prevText => prevText + " ");
    }

    const handleKeybord = (e: React.KeyboardEvent<HTMLInputElement>) => {

        if(e.key === 'Enter') {
            console.log('Enter키가 눌러졌습니다.');
        }
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.target을 HTMLButtonElement에서 지정된 값임을 타입 단언
        const target = e.target as HTMLButtonElement;
        console.log('클릭된 요소의 텍스트 : ', e.target); // -> <span></span>
        console.log('이벤트가 바인딩 된 요소 : ', e.currentTarget.textContent);
        console.log('클릭된 요소의 텍스트 : ', target.textContent); 
    }
  
    return (
        <div>
            <p>현재 카운트: {count}</p>
            <button onClick={handleTncrementHandler}>증가</button>

            <input type="text" value={name} onChange={handleInput} />
            <input type="text" value={hobby} onKeyDown={handleKeybord} />

            <hr />

            <div style={{padding: '20px'}}>
                <button onClick={handleClick} style={{padding: '20px'}}>
                    <span>
                        Span 1
                    </span>
                </button>

                <button onClick={handleClick} style={{padding: '20px'}}>
                    <span>
                        Span 2
                    </span>
                </button>

                <button onClick={handleClick} style={{padding: '20px'}}>
                    <span>
                        Span 3
                    </span>
                </button>
            </div>
        </div>
    )
}
