import React, { useEffect, useState } from 'react'

// ! jsonplaceholder의 posts 데이터를 비동기 함수로 가져오기
// - 해당 상태를 관리
// - 화면에 렌더링

// ? 1. 각각의 게시물 데이터 타입 정의
type Post = {
    id: number;
    title: string;
    body: string;
}


export function Effects03() {

    // ? 게시물 상태 및 초기값 지정
    const [posts, setPosts] = useState<Post[]>([]);

    // ? 로딩과 에러 상태 관리
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // ? 검색 용어에 대한 상태 관리
    const [seatchTerm, setSeatchTerm] = useState<string>('');

    // ? 데이터를 불러오는 비동기 함수 처리
    // : 메인 로직이 아닌 외부와 상호작용하는 부수 효과
    async function fetchPosts() {
        try {
            // API 통신
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');

            // 응답이 정상이 아니라면 오류
            if(!response.ok){
                // 강제로 에러를 발생
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // 응답이 정상적으로 존재한다면 JSON 형태로 데이터 반환
            const data = await response.json();

            // const filteredPosts = data.filter((post: any) => post.userId === 1);

            // 데이터 상태 업데이트
            setPosts(data);

            // 로딩 상태 업데이트 -> 로딩이 완료 되었을 때
            setLoading(false);

        } catch (error){
            // 에러 상태 업데이트
            setError((error as Error).message);

            // 로딩 상태 업데이트
            setLoading(false);
        }
    }

    // 컴포넌트가 마운트 될 때 데이터 호출
    useEffect(() => {fetchPosts()}, []);

    // 검색 필터
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(seatchTerm.toLowerCase())
    );

    // 로딩 중 화면 표시
    if(loading){
        return <div>게시물 로딩 중입니다.</div>
    }

    if(error){
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <h3>Posts 게시물</h3>

            {/* 검색 기능 */}
            <input 
                type="text" 
                value={seatchTerm}
                onChange={(e) => setSeatchTerm(e.target.value)}
                placeholder='검색어를 입력해주세요.'
            />

            <ul>
                {/* 순서가 없는 태그 내에 h4 태그 (post 제목), p 태그 (body 내용) */}
                {filteredPosts.map(post => (
                     <li key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
