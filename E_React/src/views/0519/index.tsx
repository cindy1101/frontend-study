import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BlogPosts from './a_Router/BlogPosts'
import BlogPost from './a_Router/BlogPost'
import QueryParams01 from './b_QueryParams/QueryParams01'

export default function Index() {
  return (
    <div>
    <h1
      style={{
        backgroundColor: "pink",
      }}
    >
      0519
    </h1>

    <h2>1. Practice</h2>
    <Routes>
        {/*중첩된 라우터에서 빈 /는 메인 경로를 의미 */}
        <Route path='/' element={<BlogPosts />} />
        <Route path='/posts/:postId' element={<BlogPost />} />
        {/* : 동적으로 */}
    </Routes>
    <h2>2. QueryParams & useSearchParams</h2>
    <QueryParams01/>
    <h2>3. Axios</h2>
    <h2>4. Context API - 전역 상태 관리</h2>
    
  </div>
  )
}
