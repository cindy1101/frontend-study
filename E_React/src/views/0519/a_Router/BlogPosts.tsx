import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// ! Post 인터페이스 구조 정의
interface Post {
    id: number;
    title: string;
    body: string; // 포스트의 본문
}

export default function BlogPosts() {

    // 포스트 목록을 관리하는 상태 관리
    // : 데이터 정보를 가지고 와서 정의하기 위해 useState를 사용 (컴포넌트 단위 사용)
    const [posts, setPosts] = useState<Post[]>([]); // Post의 배열값, 초기값은 빈 배열

    // 컴포넌트가 마운트 되거나 업데이트 될 때 실행될 사이드 이팩트 정의
    useEffect(() => {
        
        // 비동기 함수 정의 -> 포스트 목록을 가져오기
        const fetchPosts = async () => {

            // 서버에 데이터 요청 (가지고 와서 JSON으로 파싱을 해야 하는데 그걸 간단하게 하는 법은 axios 사용) -> npm i axios
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

            // 응답 받은 데이터를 posts 상태에 저장
            setPosts(response.data);

        };

        // 정의한 비동기 함수 호출
        fetchPosts();

    }, []); // 함수와 의존성 배열 

    

  return (
    <div>
        <h2>==== Blog Posts ====</h2>
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    {/* Link 컴포넌트를 사용하여 각 포스트 제목을 링크로 제작 -> 해당 제목 클릭 시 포스트의 상세 페이지로 라우팅*/}
                    <Link to={`posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
