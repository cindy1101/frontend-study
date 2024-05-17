import React, { Children } from 'react'

interface ClgButtonProps {
    message: string;
    children: React.ReactNode; // HTML 코드 작성?
}

// # 두 버튼에서 다른 메시지 값을 prop로 전달 받아 출력 (하나의 컴포넌트)
// -> 컴포넌트 내부에서 선언되기 때문에 컴포넌트 props에 접근 가능하다
function ClgButton({message, children}: ClgButtonProps): JSX.Element {
    return(
        <button onClick={() => console.log(`${message}`)}>
            {children}
        </button>
    );
} 

export default function Handler02() {
  return (
    <div>
       <ClgButton message='A를 동작'>
            A를 동작 시킵니다.
       </ClgButton>

       <ClgButton message='B를 동작'>
            B를 동작 시킵니다.
       </ClgButton>
    </div>
  )
}
