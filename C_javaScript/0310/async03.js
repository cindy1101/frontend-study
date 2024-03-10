// ! 콜백을 사용한 비동기 코드 작성

// ? 데이터베이스 조회 모방
// : findUserById 와 findUserPosts 함수를 작성
// : 사용자 ID를 인자로 받아, 해당 사용자 정보와 사용자의 게시물으 비동기적으로 조회

function findUserById(userId, callback){

    setTimeout(() => {

        console.log(`Finding user with Id ${userId}`);

        // 아래의 user 데이터는 서버와 통신하여 가져오는 값
        const user = {
            id: userId,
            username : 'LSA'
        };
        
        // 통신을 통해 데이터를 가져오기 전에 callback 힘수는 실행 중
        callback(null, user);

    }, 3000); // 3초 뒤에 사용자 정보 반환

}

function findUserPosts(userId, callback){

    setTimeout(() => {

        console.log(`Finding posts for user ${userId}`);

        const posts = [
            { postId: 1, content : 'Hello World' },
            { postId: 2, content : 'Anoter Posts' }
        ];

        callback(null, posts);

    }, 1000);
}

findUserById(1, (error, user) => {

    if(error){
        console.error(error);
        return;
    }

    console.log('User founf: ', user);

    findUserPosts(user.id, (error, posts) => {

        if (error) {
            console.error(error);
            return;
          }
          console.log('Posts found: ', posts);

    });

});


// setTimeout()을 사용하여
// : 사용자의 ID를 인자로 전달 받아
// : 사용자 정보와 사용자의 게시글을 비동기적으로 조회
// -> 코드의 실행 시점을 개발자가 지정