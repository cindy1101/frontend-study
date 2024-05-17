import React from 'react'
import ExportDefault, { Img } from './Component01'

/*
    # export default 
    : 사용자 파일에서 단 하나만 

    # export function
    : 이름 명칭 변경 불가능

*/

export default function Component02() {
  return (
    <div>
        <h3>Component02 컴포넌트</h3>

        <Img />
        {/* 
            export default 로 내보내진 컴포넌트는 컴포넌트명 변경이 가능
        */}
        <ExportDefault />
    </div>
  )
}
