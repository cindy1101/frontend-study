import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Page from './Page'
import View from './View'

// ! SPA (Single Page Application)
// : 사용자와의 상호작용을 통해 필요한 데이터만 동적으로 불러와 페이지를 갱신하는 웹 애플리케이션 설계 방식
// -> 페이지 로딩 시 서버로부터 HTML, CSS, JS를 한 번에 로딩하고 이후의 새로운 페이지 요청은 필요한 데이터만을 호출하여 갱신한다.

//  : 단일 페이지 안에서 페이지 화면이 전환되는 것을 말한다.

// ? 장점
// : 빠른 페이지 전환이 가능하다. (헤더, 푸터 놔두고 안에 컨텐츠만 바뀐다 -> 필요한 데이터만 변환)
// : 웹과 모바일 앱 간의 일관된 UX 제공

// ? 단점
// : 초기 로딩 시간이 길어진다.
// : SEO 검색 최적화가 복잡하다.

// ! MPA (Multi Page Application)
// : 전통적 웹 페이지 방식으로 사용자가 페이지를 요청할 때마다 서버는 새로운 페이지를 로딩 + 전송하게 된다.

// ? 장점
// : SEO 최적화가 용이하다.
// : 기술 스택 선택의 폭이 넓음 (과거 데이터가 많기 때문에)

// ? 단점
// : 페이지 로딩 시 서버 부담 큼, 속도도 느림 (많은 데이터를 가지고 오니까)
// : 패이지 전환 시 화면 깜빡임

// & 리액트 라우터 -> 컴포넌트의 랜더링을 관리
// : SPA 개발에서 페이지 간의 라우팅을 관리하는데 사용되는 라이브러리
// : 사용자가 요청하는 URL에 따라 해당 컴포넌트를 렌더링, 페이지를 새로 불러오지 않고도 뷰 전환이 가능하다.

// ? 리액트 라우터 사용 방법

// # 1. 설치
// : 라이브러리이기 때문에 설치해야지 된다.
// : npm install react-router-dom

// # 2. 프로그램 설정 (typescript)
// tsconfig.json 파일에서 아래의 설정을 추가
// {
//     "compilerOptions" : {
//         "jsx" : "react-jsx"
//     }
// }

// # 3. index.tsx 파일에서 리액트 라우터 설정 추가
// : 전체 프로젝트에서 라우팅 기능을 사용함을 명시한다.
// <BrowserRouter></BrowserRouter> 컴포넌트로, 전체 컴포넌트(<App />)을 감싼다.

// ! 라우터 사용 방법
// : Route 컴포넌트에 path='경로' element={<컴포넌트>} 속성을 사용한다.
// : 여러 개의 Route를 하나의 컴포넌트에 적용하는 경우 Routes 컴포넌트로 반드시 묶어서 사용해야 한다.

export default function Router01() {
  return (
    <div>
        리액트 라우터 돔 학습
        <Routes>
            {/* 경로에 / 설정을 하는 경우, 현재 컴포넌트의 경로로 지정 */}
            <Route path='/' element={<Page />}/>
            {/* 경로에 새로운 경로가 추가되는 경우, 현재 컴포넌트 경로를 기준으로 추가 */}
            <Route path='/view' element={<View />}/>
        </Routes>
    </div>
  )
}
