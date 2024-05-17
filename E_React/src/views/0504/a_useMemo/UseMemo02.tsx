import React, { useMemo, useState } from 'react'

// ! 빨간색
// ? 파란색
//// 사용하지 않는 주석
// todo - 프로젝트 구현 시 해야할 내용 정리

// * 검은 배경의 노란 글씨
// # 검은 배경에 핑크 글씨
// % 검은 배경에 초록 글씨
// & 검은 배경에 흰색 글씨

// ! 사용자의 입력에 따라 필더링 된 리스트를 표시하는 컴포넌트 구현

// # 큰 리스트를 생성하는 Array 인스턴스 생성
// : Array.from 은 배열로부터 새로운 Array 인스턴스를 생성한다.
// : length 속성을 사용하여 10000개의 길이를 가지는 배열을 생성하고
// : 각 요소를 'Item 1', 'Item2' ... 'Item 1000' 형태로 초기화
const largeList = Array.from({length: 1000}, (_, index) => `Item ${index + 1}` );

// _ 사용 시 배열은 생성되었지만 그 안에 요소값은 생성되지 않기에 내용값이 없는 녀석을 들고 오기 위해 사용한다?

export default function UseMemo02() {
  
    const [filter, setFilter] = useState<string>('');

    // 1,000개의 배열을 순회하는 건 많기 때문에 useMemo를 사용하여 리스트 필터링 로직을 메모이제이션
    const filteredList = useMemo(() => {    
        
        console.log('배열을 필터링 중입니다.');

        // largeList를 순회하여 filter 값이 포함된 아이템만 반환

        // ? toLocaleLowerCase
        // : 대소문자를 구분하지 않도록 배열값과 input 값을 모두 소문자로 변환하는 로직이 하나 있다.

        // ? includes
        // : 배열과 문자열 등에 해당 내용이 포함되어 있을 경우 true을 반환한다.
        // : 포함 여부에 따라 boolean 값을 반환한다.

        return largeList.filter(item => item.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));

    }, [filter])
  
    return (
        <div>
            <input 
                type="text" 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder='Filter list'    
            />

            {/* 사용자의 입력으로 필터링 된 결과를 리스트 형태로 출력 */}
            <ul style={{
                height: '400px',
                overflowY: 'scroll'
            }}>
                {filteredList.map(item => (
                    <li key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
