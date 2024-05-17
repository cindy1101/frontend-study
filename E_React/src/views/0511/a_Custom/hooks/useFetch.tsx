import React, { useEffect, useState } from 'react'

// ! Custom Hook (커스텀 훅) 정의
// : 실무에서는 주로 API 호출, 이벤트리스너 관리, 폼 데이터 처리 등의 기능에 사용된다.

// & API 가지고 올 데이터의 정의를 한다.
interface FetchResult<T> {
  data: T | null; 
  // 데이터 가져왔을 때 성공은 T 타입, 실패(또는 가져오기 전)에는 null 타입
  // null값을 사용하는 이유는 데이터를 요청하기 전까지 데이터가 아무것도 없기 때문이다.
  loading: boolean;
  error: Error | null; 
  // error 발생 시 Error 타입, 미발생 시 null 타입
} // 타입은 제네릭으로 관리가 된다.

export default function useFetch<T>(url: string): FetchResult<T> {

  const [result, setResult] = useState<FetchResult<T>>({
    data: null,
    loading: true,
    error: null
  });

  // useEffect(() => {
      // & fetch 함수를 사용한 서버 통신
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => setResult({data, loading: false, error: null}))
  //   .catch(error => setResult({data: null, loading: false, error}))
  // }, [url]);
  // url이 변경될 때만 실행할 수 있게 -> 의존성 배열에 url을 작성한다.

  // & async & await 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setResult({ data: null, loading: true, error: null });
        const response = await fetch(url);
        const data = await response.json();
        setResult({ data, loading: false, error: null })
      } catch (error) {
        setResult({ data: null, loading: false, error: error as Error})
      }
    }

    fetchData();
    
  }, [url]);
  
  return result;

} // url을 가지고 올 것이며(문자열 타입) 반환값은 FetchResult 타입으로
