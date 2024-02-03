/*

! node.js 설치 >> 아마 콘솔로그 여기서 볼 수 있어서 다운 받는 듯?

1. node.js 홈페이지 접속 -> https://nodejs.org/en
   : LTS 버전 설치 (Long Term Support)

2. 환경 변수 설정

   * 시스템 변수 (하단)
   : window > 시스템 환경 변수 편집 > 환경변수 클릭 > 시스템 변수 > 새로 만들기 > 변수 이름 : NODE_HOME | 변수 값 > 내 PC > 로컬디스크 C > C:\Program Files\nodejs > 확인

   * 시스템 변수 (상단)
   : 변수명 Path 더블 클릭 (환경 변수 편집) > 새로 만들기 > %NODE_HOME% > 제일 위로 올려 확인

   * 설정 확인
   : window 클릭 > cmd (명령 프롬프트) > node -v (node 설치 완료 확인 명령어, 20.10.0) | npm -v (10.2.4) 입력 후 확인하기


*/

console.log('node를 사용한 출력');

// ! vsc의 터미널 : ctrl + shift + `(백틱 - esc 밑에 있는 거)
// : 터미널을 git bash 설정
// + 옆의 아래 버튼 클릭 
// : 기본 프로필 선택 > git bash 클릭
// : select Default profile
// 실행하고자 하는 파일의 터미널을 실행
// 탐색기 > 파일명 우클릭 > 통합 터미널에서 열기
// node 파일명.js