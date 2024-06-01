import React from 'react'
import { useSearchParams } from 'react-router-dom';

// ! 쿼리 파라미터
// : 웹 애플리케이션에서 사용자 입력, 페이지 상태, 기타 (부수적인)데이터를 URL을 통해 전달하는 방법
// : URL의 ? 뒤에 위치, key=value의 형태로 다수가 & 기호로 연결될 수 있다.
// -> 리액트에서는 react-router-dom 라이브러리의 useSearchParams 훅을 사용하여 쿼리 파라미터를 관리하게 된다.

// (예) 네이버 검색 후 링크 보세요!

// ? 쿼리 파라미터의 장점
// 1. 상태 유지
// : 사용자가 애플리케이션에서 데이터를 입력하고 페이지를 새로고침할 때 URL에 포함된 쿼리 파라미터에 데이터를 저장하여 데이터 값이 유지가 된다.
// (예) 안녕하세요 검색 후 페이지를 전환하고자 할 때 안녕하세요 데이터를 저장

// 2. 복잡한 데이터 관리
// : 하나의 URL에 key의 이름을 붙여 여러 값들에 대한 상태 관리가 가능하다.

// ? useSearchParams 훅
// : useState의 형태와 유사하다.
// : key 와 value 쌍의 값들을 상태 관리한다.
// : 해당 값에서 get('key') 조회 시 value 값 사용 가능하다.

const [searchParams, setSearchParams] = useSearchParams();

const query = '';

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
}


export default function QueryParams01() {
  return (
    <div>
        <input 
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder='검색어를 입력해주세요.'   
        />
        <p>Search Query: {query}</p>
    </div>
  )
}
