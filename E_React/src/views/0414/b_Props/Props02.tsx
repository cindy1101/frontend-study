import React from 'react'
import { text } from 'stream/consumers';

/*
    ! 두 개의 컴포넌트 구성

    * USerProfile 컴포넌트
    : 두 가지 props를 전달 받음 (username: 문자열, age: 숫자)
    : 출력은 이름과 나이를 전달받고 '안녕하세요, {username}님, 당신의 나이는 {age}살 입니다.'

    * Message 컴포넌트
    : 하나의 props를 전달 받음
    : 메시지를 단순하게 화면에 표시 (text: 문자열) -> 오늘도 좋은 하루 되세요.

    ! 부모 컴포넌트
    : UserProfile과 Message 컴포넌트를 사용하여 사용자의 프로필과 환영 메시지를 표시

*/

type UserProfileType = {
    username: string;
    age: number;
}

const UserProfile: React.FC<UserProfileType> = ({username, age}: UserProfileType)=> {
    return(
        <div style={{fontWeight: 'bold', margin: '10px'}}>
            안녕하세요, {username}님, 당신의 나이는 {age}살 입니다.
        </div>
    )
}

type MessageType = {
    text: string;
}

function Message({text}: MessageType){
    return(
        <div style={{color: 'green', margin: '10px'}}>
            {text}
        </div>
    )
}

Message.defaultProps = {
    text: '전달할 내용이 없습니다.'
}

export default function Props02() {
  return (
    <div>
        <UserProfile username='이승아' age={28} />
        <Message text='오늘도 좋은 하루 되세요!' />
    </div>
  )
}
