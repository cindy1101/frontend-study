import React from 'react'
import useFetch from './hooks/useFetch';

// & 무엇을 명시해서 전달해야할지, 그렇기 때문에 가져 올 데이터의 타입을 명시해야한다.
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// ! 메인 컴포넌트 (커스텀 훅 사용)

export default function Custom02() {

  // & const {data, loading, error} = useFetch<제네릭타입>(url 전달); 
  let url = 'https://jsonplaceholder.typicode.com/users';

  const {data, loading, error} = useFetch<User[]>(url);

  if(loading) return <div>로딩 중입니다.</div>;
  if(error) return <div>에러 발생: ${error.message}</div>;
  
  return (
    <div>
        <h3>Users</h3>
        <ul>
          {/* 변수명? -> 해당 데이터가 비어져있지 않음을 명시한다. */}
          {data?.map(user => (
            <li key={user.id}>
              {user.name} ({user.username}) - {user.email}
            </li>
          ))}
        </ul>
    </div>
  )
}
