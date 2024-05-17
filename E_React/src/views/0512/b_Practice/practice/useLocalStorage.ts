// & 로컬 스토리지를 사용해 데이터를 지속적으로 저장, 할 일 목록 관리

import { useEffect, useState } from "react";

// ! 제네릭 훅을 생성
// : T는 사용자가 지정할 데이터 타입을 의미한다.
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
    
    // & storedValue 는 상태 초기화
    // : 초기값은 함수로 전달되며, 로컬 스토리지에서 값을 읽거나 실패하는 경우 초기값을 사용
    const [storedValue, setStoredValue] = useState<T>(() => {
        // 로컬 스토리지 활용 시 발생하는 오류를 확인하기 위한 try 문
        try {
            // 로컬 스토리지에서 주어진 key값으로 값을 조회
            const item = window.localStorage.getItem(key);

            // JSON.parse를 통해 문자열을 객체로 변환
            // : 값이 없다면 initialValue을 사용 (초기값을)
            return item ? JSON.parse(item) : initialValue;

        } catch(error) {
            console.error(error); // cer emmet 사용
            return initialValue; // 오류 시 초기값을 반환
        }

    }); // 저장된 데이터

    // & setValue 함수를 정의
    // : 주어진 값을 로컬 스토리지에 저장하고 상태를 업데이트하는 함수

    const setValue = (value: T) => {
        try{
            // value가 함수인 경우 현재 상태값을 인자로 해당 함수를 실행
            // 그것이 아니라면 바로 value를 사용한다. (단순한 값이나 객체인지)
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            // & instanceof 연산자
            // : 주어진 객체가 특정 객체인지 확인
            // : value가 Function(함수)인지

            setStoredValue(valueToStore); // 상태를 현재 값으로 업데이트한다.

            // & JSON.stringify 활용
            // : 객체를 문자열로 변환한 뒤 로컬 스토리지에 사용
            window.localStorage.setItem(key, JSON.stringify(valueToStore));

        } catch (error) {
            console.error(error);
        }
    };

    // & 컴포넌트가 마운트 될 때와 주요 종속성이 변경될 때 실행하는 로직 구현
    // : 어떠한 조건이 될 때만 업데이트 시킨다?
    useEffect(() => {
        // & handleStorageChange 함수
        // : 로컬스토리지의 변경을 감지, 상태를 업데이트

        const handleStorageChange = () => {
            try {
                const item = window.localStorage.getItem(key);
                setStoredValue(item ? JSON.parse(item) : initialValue);
            } catch(error) {
                console.error(error);
            }

        }
        
        // & Window 객체에 'storage' 이벤트 리스너 추가
        window.addEventListener('storage', handleStorageChange);

        // & 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
        return () => window.removeEventListener('storage', handleStorageChange);

    }, [key, initialValue]); // 초기값이 변경될 때

    // & 최종적으로 저장된 값과 값을 설정하는 함수를 배열로 반환
    return [storedValue, setValue];

}

export {useLocalStorage};