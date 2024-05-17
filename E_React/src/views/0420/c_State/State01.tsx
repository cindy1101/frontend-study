import React, { useState } from 'react'
/*
    ! useState
    : React 에서 제공하는 Hook 중 하나로 함수형 '컴포넌트' 내에서 상태를 관리할 수 있다. (컴포넌트 단위의 상태 관리 -> 변할 수 있는 값의 상태 관리)

    -> Hook(기능 함수 설명, 다양한 기능이 Hook에 묶여져 있음)을 통해 상태값을 선언하며 해당 상태값을 업데이트하는 함수를 제공 받는다.
    -> 해당 함수는 비동기적 처리를 기본으로 한다. (상태값이 즉시 이루어지지 않는다?)
    -> 상태 변경 시 컴포넌트의 재렌더링을 유발 (DOM을 새롭게 업데이트 한다.)

*/
export default function State01() {

    // ! useState의 기본 구분
    // const [state, setState] = useState(initialState); 

    // state : 현재의 상태값 (일반 변수의 값)
    // setState : 상태를 업데이트 하는 함수 (관례상 'set + 현재 상태값' 으로 명명)
    // initialState : 상태의 초기값 (변화되기 전 초기값)

    // -> hook(hook 안에 useState가 포함?) 는 React 내부의 함수 기능이기 때문에 React에서 import 해서 사용

    // ? 상태에 타입 정의
    // : useState 뒤에 제네릭으로 상태값의 타입 지정

    const [count, setCount] = useState<number>(0); // 초기 상태값

    const handleUpClick = () => {
        // 상태를 1 증가 (업데이트)
        // setCount 내의 공식이 계산되어 count 변수에 할당

        // ? 상태 설정 함수를 그대로 사용
        // : 이전 상태를 직접 참조한다.

        setCount(count + 1);

        // # 해당 시점에서는 이전 값이 출력
        // : React는 성능 최적화를 위해 여러 상태 변경을 한 꺼번에 처리한다.
        // : 하나의 렌더링 사이클에서 일어날 수 있도록 설정

        console.log(count); // (예: 22 -> 21)

        // ? 함수형 업데이트 사용
        // : 이전 상태 값을 기반으로 상태를 업데이트 하는 경우 함수형 업데이트를 사용하는 것을 권장
        // : 상태 업데이트 함수에 '최신 상태의 값'을 자동으로 전달한다.

        // 상태 설정 함수의 경우 인자로 현재 값을 가져올 수 있음
        // : 해당 상태에서 값을 변경하는 경우 직접 값이 전달

        setCount(prevCount => prevCount + 1);

    } // 중괄호가 끝나기 전까지는 이전 상태로

    const handleDownClick = () => {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div>
            <h5 style={{backgroundColor: 'black', color: 'white'}}>useState 최신 상태 관리</h5>
            <p>Tou Clicked {count} times</p>
            <button onClick={handleUpClick}>카운트를 증가시킵니다.</button>
            <button onClick={handleDownClick}>카운트를 감소시킵니다.</button>
        </div>
    )
}
