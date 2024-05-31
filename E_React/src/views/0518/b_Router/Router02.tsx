import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// ! 리액트 라우터 - 네비게이션 / 링크

// ? 1. Link
// : HTML의 a 태그와 유사하게 동작
// : 페이지를 새로고침하지 않고 라우트 변경을 진행한다.
// : to props가 필수값으로 네비게이션의 대상 URL을 지정한다.

// ? 2. NavLink
// : Link와 유사하게 동작된다.
// : 현재 경로와 일치하는 경우 스타일 또는 클래스 추가
// -> 활성 링크를 시각적으로 구분 가능하다.

// : 똑같이 라우팅 기능을 사용하지만 스타일 속성 빼고는 차이점이 없다.


export default function Router02() {
  return (
    <div>
        <Link to='/0518'>0518</Link>
        <Link to="/0519">0519</Link>

        <hr />

        <NavLink
        to='/0518'
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'blue'
        })}
      >
        0518
      </NavLink>
      <NavLink
        to='/0519'
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'blue'
        })}
      >
        0519
      </NavLink>
    </div>
  )
}
