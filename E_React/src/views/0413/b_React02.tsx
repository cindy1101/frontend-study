export const tmp = "";

// ? 하나의 모듈로 내보내기 export

/*

리액트 환경설정

1. 웹팩(Webpack)과 바벨(Babel)

? 웹팩(Webpack) 
: 모듈(주로 JS 파일) 번들러
: Bundler(번들러) -> 여러 개로 모듈화된 JS 파일을 하나로 합치는 기능의 도구
-> 자바스크립트의 여러 가지 파일을 하나로 압축한다?

- JSX 내의 HTML(하나의 HTML)과 CSS(하나의 CSS) 그리고 다양한 파일 등을 분리시켜주는 기능
- 웹팩 안에서 로더

- 로더(Loader)
: 웹팩은 오직 JS와 JSON으로 구성된 파일만 읽고 변환
: 로더는 다른 유형의 파일(CSS, 이미지 등)을 처리하고 웹팩이 이해할 수 있는 형태로 변환

? 바벨(Babel)
: JS 컴파일러, 최신 ES6+ 코드를 이전 버전 ES5(오래 된 버전)로 변환하여 브라우저 호환성을 개선


* CRA (Create React App)
: 리액트 기반 프로젝트를 쉽게 설정할 수 있는 환경 구축 도구 (보일러플레이트)
: 복잡한 환경 설정 없이 리액트 프로젝트를 설치

- 보일러 플레이트 : 수정없이 반복적으로 사용되는 코드

* 리액트를 CRA로 설치하기 전 필수 사항
- 런타임 되는 환경인 Node.js 설치 (node -v)
- npm 설치 (npm -v)
- 코드 IDE 툴 (VSCode)

* 시작 > CMD (설치 확인, Node 와 npm에 괄호 작성하기)

* 설치 방법
1. https://create-react-app.dev/ 접속한 후 Get Started 클릭하기
2. 우측 메뉴의 Selecting a template 클릭한 후 Creating a TypeScript app 명령어를 사용하기
   -> npx create-react-app my-app --template typescript
   -> npx create-react-app e-react1223 --template typescript
   (my-app : 프로젝트명)
3. 프로젝트를 생성하고자 하는 디렉토리에서 git bash 환경에서 해당 명령어를 사용하여 프로젝트 생성 

* CRA로 설치 된 React 폴더 구조

# node_modules 폴더 -> 프로젝트 내에서 사용되는 기능이 저장 (모듈들이 저장)
: 프로젝트에서 사용하는 외부 라이브러리와 종속성들이 설치되는 폴더
: package.json 파일에 기록된 모듈들이 저장

- 리액트의 경우 외부 라이브러리를 많이 사용하기 때문에 용량이 큼
- 대부분 git에 업로드할 때 관리되지 않도록 설정됨
- 해당 프로젝트를 클론한 경우 'npm install'을 사용하여 필요한 모듈들을 재설치

# 깃허브 파일 다운로드
>> git init
>> git branch -M main
>> git remote add origin 복사한리포지토리주소
  (붙여넣기 단축키: Shift + Ins)
>> git pull origin main

>> 다운로드 된 파일을 VScode로 열고 난 후 e-react에 들어가면 node 모듈이 없다, 해당 리엑트 프로젝트를 가지고 왔으면 e-react 우클릭 통합터미널 열기 후 npm install 를 입력한다.

? node_modules 깃 업로드 방지 방법 -> 용량이 크니 무시하겠다
: 최상위 디렉토리에 .gitignore 파일을 생성
: 업로드 하고 싶지않은 파일의 확장자 또는 파일명을 작성

: # node_modules 파일 무시 (주석)
: node_modules/
: 별(*)/node_modules

# public 폴더 -> 주요 파일로는 index.html / 변경되지 않는 사항
: 정적(static) 파일들이 위치하는 폴더 
: 내용이 고정되어 있어 별도의 처리 없이 파일 내용을 그대로 보여줄 수 있는 파일들이 저장

? index.html 파일
: 웹 사이트의 기본(메인) 페이지
: 웹 브라우저가 처음 접속할 때 자동으로 로드되어 화면에 표시
: 'html 파일' 단 하나만 존재하는 SPA(Single Page Application) 프로젝트

# src 폴더 (source)
: 리액트 애플리케이션의 주요 개발 영역
: 애플리케이션을 구성하는 주요 코드 파일들이 위치하는 폴더
: 컴포넌트, 모듈 등이 포함

? App.tsx
: 애플리케이션의 메인 '컴포넌트'
: public/index.html에 렌더링 할 내용을 정의

# App.tsx 에서 작성한 후 export (내보내기) index.tsx에 import (전달하기) index.html에 root 안에 랜더링한다
-> App.tsx에서 작성한다, App.css 삭제해주기 (index.css는 놔두어도 됨!)

? index.tsx
: 웹팩에서 애플리케이션의 시작점이 되는 파일
: 애플리케이션의 초기 설정 및 로딩 절차를 담당하여 앱의 실행을 시작

! 리액트 애플리케이션 실행
# npm run start
: node_modules 폴더가 위치하는 프로젝트 디렉토리에서 실행
- 개발 서버가 실행, http://localhost:3000 에서 애플리케이션을 자동으로 열어
  , 개발 중인 애플리케이션 확인 가능

webpack compiled successfully
No issues found. -> 오류 없이 정상적으로 실행된다!

*/