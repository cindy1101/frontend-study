import React, { useState } from 'react'
import ChildProps01 from './ChildProps01'

// ! 컴포넌트 트리 안의 상태

// ? 상태를 컴포넌트 트리의 아래로 내려 보내기
// : 부모 컴포넌트에서 자식 컴포넌트로 상태 전달

// ? 상태 (State) VS 속성 (Props)

// # 상태 (State)
// : 컴포넌트 '내부'에서 관리되는 데이터
// : 상태가 변경되면 렌더링을 유발한다. (업데이트)
// : 데이터가 변경되면 렌더링을 유발한다, 업데이트!

// # 속성 (Props)
// : 부모 컴포넌트('외부')로부터 받은 데이터
// : '읽기 전용' : 자식 컴포넌트에서 수정할 수 없다.

export interface UserType {
    userName: string;
    height: number;
} // 객체 타입

const initialValue: UserType = {
    userName: '이승아',
    height: 169
}

// ! 부모 컴포넌트
// default 는 한 파일 내 한 번만?
export default function StateProps01() {

    // 사용자의 입력을 추적하는 상태
    const [userInfo, setUserInfo] = useState<UserType>(initialValue);

    // 최종 제출된 값에 대한 상태
    const [submittedData, setSubmittedData] = useState<UserType | undefined>(); // 최종 제출된 값이 있을 수도 있고 없을 수도 있다

    // ? 비구조화 할당
    const {userName, height} = userInfo;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setUserInfo({
            ...userInfo,
            //이벤트가 발생된 name 키를 가진 값을 value로 지정
            [name]: value
        })
    }

    const handleSubmit = () => {
        // submittedData를 현재 userInfo 값으로 업데이트
        setSubmittedData(userInfo);
    }

    return (
        <>
            <input 
                type="text" 
                placeholder='이름을 입력하세요.'
                onChange={handleInputChange}
                name='userName'
                value={userName} // 객체 타입을 변수로
            />

            <input 
                type="text" 
                placeholder='키를 입력하세요.'
                onChange={handleInputChange}
                name='height'
                value={height} // 객체 타입을 변수로
            />

            <button onClick={handleSubmit}>확인</button>
            
            <ChildProps01 userInfo = {submittedData}/>
        </>
    )
}
