import React, { useState } from 'react'

// ! 커스텀 이벤트 핸들러 정의
// : 표준 이벤트 핸들러를 확장하거나 특수한 로직을 포함하는 설계 함수

// & 커스텀 클릭 이벤트 핸들러 타입
// : 많이 쓰이지는 않는다.
interface Props {
  onCustomClick: (data: string) => void;
}

// 데이터를 가지고 오는, 외부로부터 명시해서 재사용 가능한 로직을 구현
const CustomButton = ({onCustomClick}: Props) => {

  // 커스텀 데이터와 함께 이벤트 실행
  // : 버튼을 클릭하면서 데이터(외부에서 받아올 수 있는 데이터가 될 수 있음)를 onCustomClick을 실행한다.
  const handleClick = () => {
    const data = '데이터';
    onCustomClick(data);
  }

  return <button onClick={handleClick}>클릭</button>
}

// ! 고차원 함수의 이벤트 핸들링

// & 고차원 함수
// : 다른 함수를 인자로 받거나 함수를 결과로 반환하는 함수이다.
// : 이벤트 핸들러를 동적으로 생성하는 데 사용한다.

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1 );
  const decrement = () => setCount(count - 1 );

  return {count, increment, decrement}; 
}

export default function Event04() {

  // 메인 컴포넌트에서 실행
  const handleCustomClick = (data: string) => {
    console.log(`자식 요소로부터 전달받은 데이터: ${data}`);
  }

  // 고차원 함수
  const {count, increment, decrement} = useCounter();

  const handleEvent = (action: () => void) => {
    return () => {
      action(); // 외부에서 전달받은 함수를 실행
      console.log(`현재 카운트 ${count}`)
    }
  }

  return (
    <div>
      <CustomButton onCustomClick={handleCustomClick}/>

      <div>
        <button onClick={handleEvent(increment)}>증가</button>
        <button onClick={handleEvent(decrement)}>감소</button>
        <p>Count: {count}</p>
      </div>
    </div>
  )
}
