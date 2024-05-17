import React, { useEffect, useMemo, useState } from 'react'

export default function UseMemo04() {

  const [number, setNumber] = useState<number>(1);
  const [isLotte, setIsLotte] = useState<boolean>(true);

  // const withoutMeno = {
  //   loveTeam: isLotte ? '롯데' : '기아'
  // } // 수를 증가 시킬 때도 계속 계산한다

  const withMeno = useMemo(() => {
    return {
      loveTeam: isLotte ? '롯데' : '기아'
    };
  }, [isLotte]); //isLotte가 변화 될 때만, 렌더링에 영향을 끼치지 않는다

  // useEffect(() => {
  //  console.log('useEffect 호출 (useMemo 사용 안 함)') 
  // }, [withoutMeno]);

  useEffect(() => {
    console.log('useEffect 호출 (useMemo 사용 안 함)') 
   }, [withMeno]);
 

  return (
    <div>

      <h2>1년에 야구장을 몇 번 가시나요?</h2>
      <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))} 
      />

      <hr />

      <h2>응원하는 야구팀은?</h2>
      <p>야구팀(useMemo 없음) : {withMeno.loveTeam}</p>
      <button onClick={() => setIsLotte(!isLotte)}>변경</button>

    </div>
  )
}
