import React, { useState } from 'react'

// ! Todo 리스트 관리
// 1. 할 일 내용 (문자열)
// 2. 할 일 완료 상태 (논리값)
// 3. 시간 기록 (Date 날짜 타입)
// 4. 할 일 삭제
//    : 삭제 버튼 클릭 시 배열에서 요소 제거

interface Todo {
    description: string;
    completed: boolean;
    tiemstamp: Date;
}
export default function Practice01() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState<string>('');

    const addTodo = () => {
        if(task.trim() !== ''){
            // 공백, 띄어쓰기 제외하고 빈 문자열이 아니라면
            const newTodo: Todo = {
                description: task,
                completed: false,
                tiemstamp: new Date()
            }

            setTodos([...todos, newTodo]); // 전체 할 일 배열의 요소를 가져와 추가 내용을 마지막 요소로 추가

            setTask(''); // 입력 필드 초기화
        }
    }

    const toogleTodo = (index: number) => {

        const newTodos = todos.map((todo, idx) => 
            idx === index ? { ...todo, completed: !todo.completed } : todo
        );

        setTodos(newTodos);
    }

    return (
        <div style={{width: '400px', backgroundColor:'lightblue', margin: '20px auto', padding: '10px', border: '1px solid black', borderRadius: '5px'}}>
            <h3>할일 목록 APP</h3>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='할 일을 입력하세요' />
            <button onClick={addTodo}>할 일 추가</button>
            <hr />
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo.description}(추가 시간: {todo.tiemstamp.toLocaleTimeString()})
                        <button onClick={() => toogleTodo(index)}>
                            {todo. completed ? '완료 취소' : '할 일 완료'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
