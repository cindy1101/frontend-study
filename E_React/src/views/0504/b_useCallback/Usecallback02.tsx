import React, { useCallback, useState } from 'react'

// ! 카운팅 컴포넌트 예제
// : 사용자가 버튼 클릭 시 카운터가 증가
// : useCallback -> 클릭 이벤트 핸들러 함수를 메모화, 의존성 배열이 변경되지 않는 한 핸들러 함수를 재생성하지 않음

export default function Usecallback02() {

  const [count, setCount] = useState<number>(0);

  // const increment = () => {
  //   setCount((preveCount) => preveCount + 1);
  // } 

  // * 메모이제이션 될 함수
  // : 의존성 배열이 빈 배열일 경우, 컴포넌트가 처음 렌더링될 때만 함수 생성이 된다.
  // : 이전 값을 받아서 버튼을 누르면 변경된다.
  
  const increment = useCallback(() => {
    setCount((preveCount) => preveCount + 1);
  }, []); 

  return (
    <div>
        <h4>Counter: {count}</h4>
        <button onClick={increment}>증가</button>
    </div>
  )
}
