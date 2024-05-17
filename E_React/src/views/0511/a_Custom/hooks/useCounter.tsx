import React, { useState } from 'react'

// ! Custom Hook (정의 컴포넌트)
// : 기능을 담당한다(Hook), 사용자 정의 기능

// & 1. Custom Hook 정의
// : React의 기본 Hook (useState, useEffect 등)을 사용하여 작성되는 재사용 가능한 로직의 모음
// : (예) 사용자와 상호작용하는 input 창 (다양한 입력창이 있을 수 있다) -> useState로 계속 (set 함수로) 전달하는 로직, 계속해서 전달할 수 없으니 정의해서 하기 위해

// & 2. Custom Hook 특징
// : 권장사항, 보통 use로 시작하는 함수로 정의한다.
// : 함수 내에서 다른 Hook을 호출하고, 해당 결과를 반환

// ? 초기값을 매개변수로 전달받고 카운터를 증가 또는 감소 시키고 초기화하는 함수들을 반환한다.
export function useCounter(initialValue: number = 0) { // 기본 매개변수 값을 지정해서 오류 down

  const [count, setCount] = useState<number>(initialValue); // 초기값을 매개변수로 받겠다. 

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return {count, increment, decrement, reset}; // 동작 자체를 반환

}
