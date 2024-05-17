import React from 'react'

// # 부모 컴포넌트로 전달
interface ButtinProps {
    onClick: () => void;
    children: React.ReactNode;
}

function Button({onClick, children}: ButtinProps) {
    return(
        // 버튼 클릭 시 전달된 함수를 호출하도록 지시
        // : 하위 요소인 ClgButton과 BasicButton 컴포넌트는 이벤트 핸들러를 하달
        <button onClick={onClick}>
            {children}
        </button>
    );
}

interface ClgButtonProps {
    clg: string;
}

function ClgButton({clg}:ClgButtonProps){

    function handleClgClick(){
        console.log(`Console log ${clg}`);
    }

    return(
        // 내부 Button에 onClick의 prop으로 handleClgClick을 전달
        <Button onClick={handleClgClick}>
            Console log "{clg}"
        </Button>
    )
}

function BasicButton(){
    return(
        // 내부 Button에 onClick의 prop으로 인라인 함수를 전달
        <button onClick={() => console.log('기본 버튼입니다.')}>
            기본 버튼
        </button>
    )
}

export default function Handler03() {
  return (
    <div>
        <ClgButton clg='콘솔에 내용을 입력합니다.' />
        <BasicButton />
    </div>
  )
}
