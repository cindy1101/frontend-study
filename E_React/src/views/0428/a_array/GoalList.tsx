import React from 'react'

// 목표 정의 인터페이스
interface Goal {
    id: number;
    title: string;
    explanation: string;
    active: boolean; // 활성 상태 (수정할 때 필요하니까)
}

// GoalList 컴포넌트의 props를 정의하는 인터페이스
interface GoalProps {
    goals: Goal[];
    // 목표 삭제 함수, 목표의 id를 인자로 전달 (삭제 버튼 클릭 시 해당 id를 인자로 받는다?)
    onRemove: (id: number) => void;
    // 목표 활성 상태 토글 함수, 목표의 id를 인자로 전달
    onToggle: (id: number) => void;

} 

// ! 여러 개의 목표를 전달 받는 컴포넌트
// : 목표를 렌더링 (조회) 컴포넌트
// -> 읽기, 수정, 삭제

// {goals, onRemove, onToggle}: GoalProps -> 매개변수로 전달 받는, 구조분해할당 (이름 같으면 추출해서 사용)
export default function GoalList({goals, onRemove, onToggle}: GoalProps) {
  return (
    <>
        {/* goals 배열을 map으로 순회 -> 각 목표의 정보를 랜더링 */}
        {/* JS 문법 사용하기 위해 {} 사용, HTML 이기에 () 사용 */}
        {goals.map((goal) => (
            // 각 목표를 정의 - key 속성 (각 목표를 고유하게 식별)
            <div key={goal.id}>
                {/* 
                    목표의 제목과 설명을 표시 
                    : 클릭 될 경우 '해당 목표의 활성 상태가 토글'된다.
                */}
                <span
                    style={{
                        cursor: 'pointer',
                        color: goal.active ? 'green' : 'black'
                    }}
                    // 클릭 시 onToggle 함수를 호출, 목표 id를 인자로 전달
                    onClick={() => onToggle(goal.id)}
                >
                    {goal.title} - {goal.explanation}
                </span>

                {/* 목표 삭제 버튼 - 클릭 시 onRemove 함수가 호출 */}
                <button onClick={() => onRemove(goal.id)}>삭제</button>
            </div>
        ))}
    </>
  )
}
