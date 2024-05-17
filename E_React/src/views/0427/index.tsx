import React from 'react'
import StateProps01 from './a_State_Props/StateProps01'
import ChildProps01 from './a_State_Props/ChildProps01'
import StateProps02 from './a_State_Props/StateProps02'
import UseRef from './b_useRef/UseRef'
import UseRef02 from './b_useRef/UseRef02'
import Arr01 from './c_Array/Arr01'
import Arr02 from './c_Array/Arr02'

const images = [
  'https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_1280.jpg',
  'https://cdn.pixabay.com/photo/2019/10/29/08/00/dog-4586317_1280.jpg',
  'https://cdn.pixabay.com/photo/2019/02/24/12/58/maltese-4017525_1280.jpg',
  'https://cdn.pixabay.com/photo/2019/10/29/08/00/dog-4586318_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/01/07/11/17/welsh-corgi-8492879_1280.jpg'
];

export default function Index() {
  return (
    <div>
        <h1 style={{backgroundColor: 'pink'}}>0427 수업 자료</h1>
        <h2>1. 컴포넌트 트리 안의 상태</h2>
        <StateProps01/>
        <StateProps02/>
        <h2>2. 변경 가능한 참조 객체 생성</h2>
        <UseRef/>
        <UseRef02 images={images}/>
        <h2>3. 배열 렌더링</h2>
        <Arr01/>
        <Arr02/>
    </div>
  )
}
