import React from 'react'
import Puppy02 from '../../../assets/image/puppy02.jpg';

export function Image(){
    return(
        <img src={Puppy02} alt='강아지2' width={300}/>
    )
}

export default function Component03() {
  return (
    <div>
        <p>Component03</p>
        <img src={Puppy02} alt="강아지 태그로" width={200}/>
        <hr />
        <Image />
    </div>

  )
}
