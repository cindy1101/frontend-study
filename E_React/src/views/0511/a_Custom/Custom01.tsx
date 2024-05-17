import React from 'react'
import {useCounter} from './hooks/useCounter' 
// default 때문에 오류가 나타난다, default를 삭제해준다 (useCounter)

// ! 메인 컴포넌트
// : 실제 화면에 출력될 로직으로 Custom Hook을 사용하는 컴포넌트
// : Custom Hook은 일반 React Hook 사용법과 동일하다

export default function Custom01() {
  
  // ? 객체의 구조분해할당
  // : return {count, increment, decrement, reset}; -> 객체
  const {count, increment, decrement, reset} = useCounter(0); // useCounter에서 가져오겠다
  
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>초기화</button>
    </div>
  )
}
