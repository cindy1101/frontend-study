import React from 'react'
import styles from './Styles/Style02.module.css';

// ! CSS 모듈 사용법 (컴포넌트 스펙시픽 스타일)
// : 일반 외부 css 파일과 유사하지만 (컴포넌트 자체의) 로컬 스코프로 제한되는 것이 특징이다.
// : 컴포넌트 기반에 매우 적합
// : 다른 스타일과 충돌을 방지한다

// : 대입을 한다고 생각하면 조금 더 수월할지도?

// ? import 방법
// : import 모듈명 from '경로';

export default function Style02() {
  return (
    // 클래스 이름을 동적으로 할당한다. -> 여러 개 나열
    <div className={styles.container}>
        
        클래스를 사용한 스타일링
        
        <p id={styles.uniqueElement}>
            아이디를 사용한 스타일링
        </p>

    </div>
  )
}
