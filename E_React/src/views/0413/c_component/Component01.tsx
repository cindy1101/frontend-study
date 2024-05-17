import React from 'react'
import puppy01 from '../../../assets/image/puppy.jpg';

/*
    ! 컴포넌트(Component)
    : 사용자 인터페이스 (UI)를 구축하는 기본 요소

    ! 컴포넌트 사용방법
    
    * 1. 컴포넌트 내보내기 (export default)

    * 2. 함수 정의 
    - 컴포넌트는 함수형 또는 클래스형으로 제작 가능

    - 함수형 컴포넌트 제작을 권장
    : JS의 일반 함수 형태와 동일하지만 함수명을 반드시 대문자로 시작해야 한다.

    : rfc 스니펫 사용 시 파일명으로 함수명이 구현
    - 파일명으로 함수명이 구현되기 때문에 파일명 자체를 대문자로 사용하여 제작
    - 폴더에 메인이 되는 파일인 index.tsx의 경우 소문자 index를 사용해야만 디렉토리의 메인 파일로 인식 (파일명 소문자로)

    * 3. 마크업 추가
    : src와 alt 속성을 가진 img 태그를 반환한다. 
    -> JSX가 HTML처럼 작성되지만 JS 코드로 분류가 된다.
    -> JS 내에서 마크업을 내장할 수 있도록 함

*/

export function Img()
{
    // # HTML 코드 내에서 문법 사용 시
    // : {} 중괄호 내에서 작성

    // # 자바스크립트 문법 내에서 HTML 코드 작성 시
    // : () 소괄호 내에서 작성
    // : 컴포넌트 함수 내에서 렌더링 할 HTML 코드는 return 반환문 내에 ()소괄호 지정 후 작성

    return(
        <img src={puppy01} alt="하트" width={300} />
    );
}

// * 4. 정의된 컴포넌트 사용
export default function Component01() {
  // 컴포넌트 사용 시 함수 컴포넌트 명으로 태그 작성
  // - 마크업이 한 개인 경우 (호출할 마크업이 1개일 경우) return 키워드와 동일한 줄에 작성 가능 (if-else 한 줄일 때 소괄호, 중괄호 없어도 되는 거처럼!)
  // return <Image />

  // - return 키워드와 동일한 줄에서 컴포넌트 호출이 이루어지지 않거나 여러 개의 컴포넌트를 호출할 경우, 반드시 () 소괄호로 감싸서 사용
  return(
    <div>

        {/*p태그, img 태그 - HTML 태그*/}

        <p>강아지 이미지 컴포넌트 사용</p>

        <img src="https://cdn.pixabay.com/photo/2023/12/22/09/51/ai-generated-8463482_1280.jpg" alt="HTML 강아지" width={100} />

        {/* 
            return에서 태그 사용시
            - 소문자 사용 시 : React가 HTML 태그로 인식
            (HTML에 미리 정의 된 태그)

            - 대문자 사용 시 : React가 컴포넌트로 인식
            (React 내에서 사용자 정의 된 태그)

            <html></html> -> React가 HTML 태그로 인식
            <HTML></HTML> -> React가 컴포넌트로 인식 (만들었구나!)
            <Html></Html> -> React가 컴포넌트로 인식 (만들었구나!)
        */}

        <hr />

        {/*Image 컴포넌트*/}
        <Img />
        <Img />

    </div>
  )
}
