import React from 'react'

// & Filters 컴포넌트의 props 타입 정의
// : 부모로부터 받아 올 데이터 타입을 정의

interface FilterProps {
  // 필터 상태를 변경하는 함수 타입
  setFilter: (filter: 'all' | 'completed' | 'active') => void;
}
export default function Filters({setFilter}: FilterProps) {
  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('active')}>Active</button>
    </div>
  )
}
