import React from 'react'

// ! 1. 외부 CSS 파일 사용법 -> 전통적, 재사용성
// : 외부 스타일 사용 방법과 동일
// -> 외부에서 제작된 css 파일을 import하여 사용하게 된다.

import './Styles/style01.css';

export default function Style01() {
  return (
    <div className='container'>
        <h2 className='heading'>React Styling</h2>
        <button className="button">
            버튼을 클릭해주세요.
        </button>
        <p id="uniquePara">단락입니다.</p>
    </div>
  )
}
