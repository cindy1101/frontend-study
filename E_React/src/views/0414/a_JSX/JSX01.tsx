import React from 'react'

/*
    ! JSX(TSX)
    : JS 파일 내에서 HTML과 유사한 마크업(위치 선정)을 작성할 수 있도록 해주는 JS의 구문 확장 문법

    ? 사용 목적
    : 선언적 뷰 (명시적, 직관적으로 UI의 상태를 기술, 해당 상태에 따라 자동으로 업데이트 -> UI를 직관적으로 설계)
    : 불필요한 DOM 설정이 필요가 없다. -> 코드의 축약

    ? 특징
    : JS + HTML(XML) 형태로 엄격한 문법 체계를 가짐
    : JSX 파일 내에서 Bable을 사용하여 JS로 변환하려면 XML 문법을 준수해야만 가능하다.
    
    ? JSX 문법 규칙
    1. 단일 루트 노드
    : 하나의 '컴포넌트' 는 단일 루트 노드만 반환

    # 1. 단일 루트 노드
    : 최상단의 루트 태그가 존재해야 한다.
    : 전체 elements를 감싸는 단 하나의 요소가 존재해야 한다.

    * (빈)Fragment
    : 아무 의미 없는 태그
    : <></>
    : div 태그 사용 시 혹시나 style이나 뭐 좀 적용될 수 있을 수도 있으니까!

    # 2. 태그 닫기
    : 태그는 반드시 닫혀있어야 한다.
    : input, br, hr, img 태그 사용 시 주의
    : 닫히는 꺽쇠 괄호에 /가 첨부되어 있어야 한다.

    # 3. 대소문자 구분
    : 태그 내의 이름이 대소문자로 구분
    : 소문자는 HTML 요소, 대문자는 사용자 정의 컴포넌트로 인식

    # 4. HTML 코드를 JSX로 변환 시 주의점
    - 대부분 lowercamelCase로 작성 (낙타문법)
    : backgroundColor, fontSize, borderRadius
    - class 속성을 className으로 설정
    : class 속성명을 변경 -> ctrl + f (찾기) 의 바꾸기 (* 아이콘, 2번째는 전체)

    # https://transform.tools/html-to-jsx (HTML 을 JSX로 변환)

*/

export function Div(){
    return(
        <>
            <div className="hello"></div>
            <div className="hello"></div>
            <div className="hello"></div>
        </>
    )
}

export default function JSX01() {
  
  // # return 반환문이 노드(HTML)을 반환하는 부분
    return (
        
    <>
        {/* HTML 요소 */}
        <div>JSX01</div>
        <p style={{fontSize: '20px', color: 'pink'}}>안녕하세요</p>

        {/* 태그 닫기 */}
        <input type="text" />
        <img src="" alt="" />
        <br />
        <hr />

        {/* 컴포넌트 */}
        <Div />
    </> // -> (빈)Fragment

    // <p>안녕</p> -> 하나의 부모 (단일 루트 노드)
  )

}
