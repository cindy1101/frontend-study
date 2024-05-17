import React from 'react'
import { FaStar } from "react-icons/fa6";

// * 랜더링 
// : 화면을 출력한다?

interface ItemType {
    // 여행을 위한 짐 싸기
    // 짐 항목의 이름과 준비 여부를 props로 전달 받음
    name: string;
    isPacked: boolean;
}

function Item({name, isPacked}: ItemType) {

    // ! if 조건문을 사용한 조건부 랜더링
    // isPacked가 true의 값인 경우 : 짐 싸기 완료
    // if(isPacked){
    //     return <li className='item'>{name} ❤️‍🔥</li>
         // 만약 조건부로 아무것도 반환하지 않을 경우에는 'null 반환'
         // return null; -> 완료되어서 랜더링 되지 않으려면!
    // }

    // isPacked가 false인 경우
    // else 문 빠진 거라고 보면 될지도 ~.~
    // return <li className='item'>{name}</li>;

    // # if 조건문 내에서 작성하고자 하는 코드가 여러 줄일 때 {} 가 필요하지만, 자바스크립 코드 사용하는 {}와 충돌이 될 수 있음 -> 오류 발생 가능성이 있다! (중첩 코드 불가)


    // ! 삼항연산자를 사용한 조건부 랜더링 (중요!)
    //return(
        // <li className='item'>
        //     {/* HTML 코드 내에서 JS 문법 사용 시 {} */}
        //     {isPacked ? (<li>{name} 💙</li>) : (<li>{name}</li>)}
        // </li>

    //     <li className='item'>
    //         {isPacked ? name + '😘' : name}
    //     </li>
    // )

    // ! 논리 연산자 (&&, and)를 사용한 조건부 렌더링 (중요!)
    return (
        <li className='item'>

            {/* 
                && 연산자
                : A && B, 둘 다 true여야 true 값이 반환된다.
                : A의 값이 false 인 경우 B의 값이 출력되지 않는다.
                : A의 값이 true 인 경우 B의 값이 출력된다.
            */}

            {name} {isPacked && '❄️'}
        </li>
    )
}


export default function Rendering01() {

  const score = 1;

  return (
    <section>
        <p>여행용 짐 목록</p>
        <ul>
            <Item name='과자' isPacked = {true} />
            <Item name='음료수' isPacked = {true} />
            <Item name='김밥' isPacked = {false} />
        </ul>

        {/* 
            score 점수가 0 이상인 경우 별이 출력 0 미만인 경우 출력이 안 된다.
        */}
        <div style={{margin: '20px', border: '1px solid black'}}>
            {score >= 0 && <FaStar />}
        </div>
    </section>
  )
}

// * 값을 전달할 때는 {} 중괄호 내에 전달하기!


// # 외부 라이브러리 사용 -> react-icons 사용
// : 리액트에서 다양한 아이콘을 사용하기 위한 라이브러리
// * 설치 명령어 : npm install react-icons


