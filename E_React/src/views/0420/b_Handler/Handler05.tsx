import React from 'react'

// ! 이벤트 전파 (버블링)
// : 컴포넌트의 자식 요소에서 발생하는 이벤트를 잡아내는 것
// : 발생한 곳에서 시작 -> 트리를 따라 위로 올라감

// # (예시) button -> div 이렇게 올라간다, 메인 영역만 클릭하면 메인 영역만, 버튼을 클릭하면 버튼, 메인 영역
// export default function Handler05() {
//     return (
//       <div className='Main' 
//           onClick={() => {console.log('메인 영억을 클릭하였습니다.');}}
//           style={{padding: '20px', backgroundColor:'pink'}}
//       >
//           <button onClick={() => console.log('AAAA')}>
//               A 동작
//           </button>
  
//           <button onClick={() => console.log('BBBB')}>
//               B 동작
//           </button>
//       </div>
//     )
// }

// ! 전파 중지
// : 이벤트 핸들러는 그들의 유일한 인자로 이벤트 객체를 전달 받음
// -> 보통 e 라고 불리며, event를 의미한다
// -> 해당 이벤트 객체를 통해 이벤트 전파를 중지 가능
// # .stopPropagation()

// ! 기본 동작 방지
// : 일부 브라이저 이벤트는 해당 요소 내에 기본 동작을 포함
// EX) 내부의 버튼이 클릭되었을 때 form 요소의 제출 이벤트 -> 전체 페이지를 다시 로드한다.
// # .preventDefault()

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

function Button({onClick, children}: ButtonProps) {
    return(
        <button onClick = {(e) => {
            // # 이벤트 전파 중지는 .stopPropagation(); 사용
            e.stopPropagation();
            console.log(e.target);
            onClick();
        }}>
            {children}
        </button>
    );

}

export default function Handler05() {
  return (
    <div className='Main' 
        onClick={() => {console.log('메인 영억을 클릭하였습니다.');}}
        style={{padding: '20px', backgroundColor:'pink'}}
    >
        <Button onClick={() => console.log('AAAA')}>
            A 동작
        </Button>

        <Button onClick={() => console.log('BBBB')}>
            B 동작
        </Button>


        <hr />

        <form onSubmit = {(e) => {
            // # 이벤트 객체(e) 내부의 기본 동작 방지 .preventDefault()
            e.preventDefault();
            console.log('전송 중입니다.');
        }}>
            <input type="text" />
            <button>Submit</button>
        </form>
    </div>
  )
}
