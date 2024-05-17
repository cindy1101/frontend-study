import React, { useState } from 'react'

// ! 외부 API를 구현하는 형식

// & 외부 API의 역할
// : 서버없이 프론트엔드 애플리케이션을 구현할 때 중요한 데이터 소스 역할 (백엔드 역할을 대신 해준다는 개념)

// & 이벤트 핸들링을 통한 API 호출
// : 사용자가 버튼을 클릭하면 특정 API 호출을 하며 결과를 화면에 표시하는 로직 사용

// https://jsonplaceholder.typicode.com/posts/1

// * 데이터 타입 명시
type Post = {
  userId: number; // 게시물 작성자의 id
  id: number; // 게시물의 id
  title: string; // 제목
  body: string; // 내용
}

export default function Practice01() {
  
  // 버튼 누르기 전까지는 null 값이 생성된다.
  const [post, setPost] = useState<Post | null>(null);
  const [id, setId] = useState(''); // 문자열로 전달

  // & 이벤트 핸들러
  // : 데이터를 가져오는 비동기적 함수
  const fetchPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data: Post = await response.json();
    setPost(data);
  }

  return (
    <div>
        <input 
          type="text" 
          placeholder='게시물의 id를 입력해주세요.'
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <button onClick={fetchPost}>게시물 로드</button>

        {/* 
          post 값이 있을 경우 제목과 내용을 출력, 없을 경우 no data loaded를 출력 
          -> 삼항연산자 || 연산자 하나라도 true일 경우 true이다! (post가 true일 때 내용을 출력 false일 때 no data loaded를 출력)

          post 값이 존재하는 경우에만 제목과 내용을 출력, 없을 경우 출력 내용이 없음  
          -> && 연산자, 하나라도 false 일 시 false이다.
          -> false일 경우 뒤에 거를 실행하지 않는다는 특징이 있다룽!
        */}

        <div>
          {post ? (
            // 게시물이 존재하는 경우 (true)
            <div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ) : (
            <p>No data loaded</p>
          )}
        </div>

        <div>
          {post && (
            <div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          )}
        </div>

    </div>
  )
}
