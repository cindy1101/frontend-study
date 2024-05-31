/*
# 플러그인 (확장)
: ES7+ React Snippet (ES7+ React/Redux/React-Native snippets)
  -> react 문법 코드를 쉽게 작성하기 위한 스니펫 설정 기능

# 스니펫 (Snippet)
: 재사용 가능한 소스 코드, 기계어 등을 작업 단위로 묶어서 사용할 수 있게 하는 기능

? 함수형 컴포넌트 제작 스니펫
# rfc
 import React from 'react'

 export default function React01() {
   return (
     <div>React01</div>
   )
 }

 #rfce
 import React from 'react'

 function React01() {
   return (
     <div>React01</div>
   )
 }

 ! 리액트 동작 원리

? CRP 정의 (Crtical Rendering Path)
: 웹 브라우저가 HTML, CSS, JS 등의 리소스를 받아서 픽셀로 변환하여 화면에 렌더링하는 과정
: 여러 단계로 나누어짐!

1. 문서 파싱 및 DOM 생성 (HTML)
  : 브라우저는 HTML 문서를 받아 파싱(분석)하고, 이를 DOM 트리로 변환 -> 가상 돔 사용
  : JSX가 Babel을 통해 JS(ES5)로 변환되어 실행

- CSSOM 생성 (Css Object Model)
  : CSS 파일과 스타일 태그(<style />) CSSOM 트리로 변환

- JS 처리
  : 컴포넌트 로직과 상태 관리가 이루어짐

2. 렌더 트리 형성
  : DOM과 CSSOM이 결합되어 렌더 트리가 형성 
  : 화면에 실제 표시될 요소 포함 (결합, 구조와 스타일이 합쳐진다)

- 레이아웃(Reflow) -> 가상 돔으로 축약 (변경된 녀석만)
  : 렌더 트리를 기반으로 각 요소의 크기와 위치를 계산 (생각)

- 페인트 -> 가상 돔으로 축약 (변경된 녀석만)
  : 계산된 레이아웃에 따라 요소들을 화면에 그림

- 합성
  : 여러 레이어를 합성하여 최종 화면을 사용자에게 보여줌.


! 리액트와 CRP
: 리액트는 가상 DOM을 사용하여 실제 DOM의 변경을 최소화한다.
: Reflow(레이아웃) 과 Paint(페인트) 과정의 비용을 줄여 성능을 향상시키는데 기여한다.

? 작동 원리
- 초기 렌더링: 컴포넌트 초기 렌더링 시 실제 DOM과 동일한 가상 DOM을 메모리에 생성 
- 상태 변경: 컴포넌트의 상태가 변경, 새로운 가상 DOM 트리를 생성
- Diff 알고리즘: 새로운 가상 DOM과 이전 가상 DOM을 비교하여 차이를 계산 (변경점을 찾아 가져온다)
- 최소 업데이트: 계산된 차이 만큼 실제 DOM을 업데이트

*/ 

import React from 'react'

export default function React01() {
  return (
    <div>React01</div>
  )
}
