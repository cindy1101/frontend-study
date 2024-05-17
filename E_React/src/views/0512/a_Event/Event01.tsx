import React, { useCallback, useState } from 'react'

// ! React의 이벤트

// & 1. 이벤트의 정의
// : 사용자 또는 시스템이 애플리케이션에 전달하는 모든 종류의 알림
// (예) 사용자의 클릭, 키 입력, 마우스 움직임 또는 시스템에서 발생하는 업데이트 등 -> 상호작용

// & 2. 리액트의 이벤트 시스템 특징
// : 합성 이벤트 로직을 사용, 브라우저(화면)의 네이티브 이벤트를 감싸는 합성 이벤트를 사용
// -> 크로스 브라우저 호환성을 제공한다. (어떤 브라우저든 나의 이벤트는 똑같이 구현된다)
// -> SyntheicEvent 객체를 통해 전달된다.
//    : target, stopPropagation(), preventDefault() 와 같은 속성과 메서드를 포함

// & 3. 이벤트 핸들러 작성 방법
// : 함수형 컴포넌트에서는 화살표 함수를 사용하여 구현
// : 최적화 방안으로 (메모리제이션) useCallback을 사용하여 이벤트 핸들러 메모화를 진행


export default function Event01() {

  const [value, setValue] = useState<string>('');
  
  // ? 최적화를 사용한 이벤트 핸들러 'useCallback'
  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('버튼이 클릭되었습니다.');
  }, []);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // e가 합성 이벤트 객체가 된다.
    console.log(`버튼이 클릭되었습니다: ${e.type}`);
  }

  // 변화를 감지하는 이벤트
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  
  return (
    <div>
      <button onClick={handleClick}>버튼1</button>
      <button onClick={handleButtonClick}>버튼2</button>

      <hr />

      <form>
        <input 
          type="text"
          value={value}
          onChange={handleChange}
        />

        <button type='submit'>제출</button>
      </form>
    </div>
  )
}
