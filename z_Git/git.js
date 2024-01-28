/*
! 버전 관리 시스템 
: 파일 변경 이력을 관리하는 소프트웨어 시스템

? 중요성
: 협업 강화, 변경 이력 추적, 데이터 백업 및 복구

! Git 사용 방법

1. 설치

: 구글 > git > https://git-scm.com/(공식 웹 사이트) 'Download for Windows' 클릭 > 시스템 정보 확인 후 다운로드 받기 > 설치하기 후 화면 뜨면 설치 완료 됨! 

- MacOs에서 git 설치 (추가 방법) Homebrew 사용시 brew install git 명령어 실행

: 시작 버튼 > CMD 혹은 명령 프롬프트 > git --version (깃 설치 확인 명령어)

2. 기본 설정 (Git에 사용자 이름과 이메일 설정)

- window 사용시
: 시작 버튼 > 자격 증명 관리자 > window 자격 증명 > 일반 자격 증명 > git 또는 github 또는 sourcetree 에서 타인의 아이디로 설정되어 있는 경우 삭제 > 브라우저에 githube 로그인 상태 확인 

- 사용자 이름과 이메일 설정
1. windwo 사용시 (Git Bash, cmd >> 시작에 검색해서!)
2. MaxOs 사용시 (Git Bash, 터미널)
>> 위 환경의 붙여넣기는 shite + Ins
>> 새로운 명령어 환경 열기 - ctrl + c
>> 키보드 방향키 (위/아래) : 이전 또는 앞전의 명령어 붙여넣기


- 사용자 이름 설정 
git config --global user.name 본인아이디
ex) git config --global user.name cindy1101

- 사용자 이메일 주소 설정
git config --global user.email 깃허브이메일
ex) git config --global user.email poriy@naver.com

? 설정 확인
git config --global user.name
git config --global user.email


! Git의 구조적 요소

1. workspace : 우리가 작업하고 있는 파일 / 개발자가 코드를 작성하는 공간
2. staging area : 깃허브의 무대로 올려준다, 임시 저장하는 공간 / 커밋하기 전에 파일의 변경사항을 준비하는 장소, 기존의 로컬 스토리지와의 변경사항을 검토하고 커밋할 항목을 결정
3. Local repository : 작업한 컴퓨터의 메모리 시스템 / 사용자의 개인 컴퓨터에 위치한 저장소, 개인 작업을 진행하고 저장
4. remote repository : 웹 사이트 깃 허브에 업로드하는 것 / 인터넷이나 네트워크에 위치한 저장소 GitHube의 호스팅 서비스를 사용


! Git의 주요 명령어

1. 깃 저장소 초기화 : git init (명령어 사용시 해당 폴더에 .git 디렉토리가 생성)

2. 깃 상태 확인 : git status (현재 저장소의 상태를 보여줌 / 변경된 파일, 스테이징된 파일, 커밋되지 않은 사항을 확인)

3. 깃 사용 명령어 

   ? git add . 
   : 파일을 스테이징 영역에 추가하여 Git이 추적하게 함
   : git add 파일명 / git add . (모든 변경사항 추가)

   ? git commit -m "커밋 메시지"
     : 스테이징 영역의 변경사항을 (로컬)저장소의 기록으로 작성
     : (커밋 메시지 예) 20240128 Yej grid layout

   ? git push
     : 로컬 변경사항을 리모트 저장소에 업로드
     : git push origin main (일반적으로 업로드, 내 개인적인 작업)

   ? git pull
     : 리모트 저장소의 변경사항을 로컬로 가져오는 명령어
     : 로컬에서 작업 환경 (work space)까지 바로 사용 가능
     : git pull origin main 


! 깃과 깃허브 연동

  ! 프로필 클릭 > Your Repositories > new 버튼

  ? 리포지토리 개설 후 첫 연동
    echo "# frontend-study" >> README.md
    >> README.md 파일을 생성 (# frontend-study 텍스트 추가)

    git init
    >> 깃 초기화

    git add README.md
    git commit -m "first commit"

    git branch -M main
    >> git의 현재 브랜치 이름을 main으로 변경
       : 기본 브랜치명 (master)을 main으로 변경

    git remote add origin https://github.com/cindy1101/frontend-study.git
    >> 리모트 저장소를 추가

    git push -u origin main
    >> 로컬 리포지토리 main 브랜치를 원격 리포지토리에 푸시
    >> -u : 옵션, 추후 git push나 git pull을 진행할 때 브랜치 이름을 생략 가능하도록 설정

  ? 리모트 저장소 추가
  : 작업하는 환경 (workspace)과 원격 리포지토리를 연결
  : git remote add origin 리모트저장소URL


  ! 연동된 저장소에 새로 
   1. 파일 오른 쪽 클릭 후  Open Git Bash here 클릭 후 저 위 코드 복사 붙여넣기 후 엔터 후 비밀번호 입력하기 >> 파일 후 README.md 랑 .git 생겼는지 확인하기!
   

*/