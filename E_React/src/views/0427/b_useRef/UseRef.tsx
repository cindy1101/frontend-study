import React, { useRef, useState } from 'react'

// ! use - 훅 (기능)
// : React 에서 제공하는 Hook

// ! useRef
// : reference(참조)의 축약어
// : 변경 가능한 참조 객체를 생성할 수 있는 훅
// : DOM 요소에 직접적으로 접근할 때 사용하며 렌더링 사이에 지속되는 값을 유지할 때 사용한다.

// ? 기본 문법
// const refContainer = useRef(initialValue);

// initialValue : 참조 객체의 초기 값
// refContainer.current : 저장된 현재 값에 접근

// ? 텍스트 길이 카운팅 예제

export default function UseRef() {

    const [text, setText] = useState<string>('');
    // let count = 0;

    const [time, setTime] = useState<number>(0);

    // # 텍스트 길이를 저장하기 위한 참조 변수
    // : 렌더링 사이에 입력된 텍스트의 길이를 저장
    // : 입력 필드의 값이 변경될 때마다 업데이트가 된다.
    // -> 변수값을 저장해서 사용할 때, DOM 요소 접근할 때, 렌더링했을 때 변경된 값을 유지하고 싶을 때?

    const lengthRef = useRef(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        lengthRef.current = e.target.value.length;
    }

    // const handleCount = () => {
    //     count = 1; // 재할당 -> 새롭게 랜더링 되서 변경되지 않는다
    //     console.log(count);
    // }

    // ? 타이머 구현 함수
    // : 타이머의 간격(인터벌) ID를 저장
    const intervalRef = useRef<number | null>(null); // 타이머 시작하기 전에는 null이 기본값, 간격이 실행이 되면 number 타입으로

    const startTimer = () => {
        // 이미 타이머가 실행 중인 경우 추가적으로 시작하지 않도록 설정
        if (intervalRef.current !== null) return;
        // intervalRef의 현재값이 null 이 아닐 경우

        intervalRef.current = window.setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000); // 매 초마다 time 상태를 1씩 증가
    }

    const stopTimer = () => {
        if(intervalRef.current){
            // 타이머 정지
            clearInterval(intervalRef.current);
            // 인터벌 참조 초기화
            intervalRef.current = null;
        }
    }

    const resetTimer = () => {
        // ! 초기화 버튼 클릭 시
        // 1. 카운팅 중이라면 카운터 종료 + 시간을 0으로 초기화
        // 2. 카운팅 안 되고 있다면 시간을 0으로 초기화

        // 타이머가 실행 중
        stopTimer();
        // 시간을 0으로 초기화
        setTime(0);

    }

    return (
        <>
            <h4>현재 텍스트 길이 측정 예제</h4>
            <input 
                type="text" 
                value={text}
                onChange={handleChange}    
            />
            <p>TEXT 길이 : {lengthRef.current}</p>
            {/* <button onClick={handleCount}>카운트 증가</button> */}

            <hr />

            <h4>타이머 예제</h4>
            {/* 현재 시간 표시 */}
            <p>Time: {time} seconds</p>
            <button onClick={startTimer}>시작</button>
            <button onClick={stopTimer}>종료</button>
            <button onClick={resetTimer}>초기화</button>
        </>
    )
}
