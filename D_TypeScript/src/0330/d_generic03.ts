{
    // ! 유니온 타입과 제네릭

    // * 유니온 타입 (|)
    // : 여러 타입 중 하나가 될 수 있는 값을 의미

    // extends 확장해서 제한한다
    function processValue<T extends string | number>(value: T) {

        if(typeof value === 'string'){
            return value.toLowerCase();
        }

        return value; // string || number

    }

    const processString = processValue('string');
    const processNumber = processValue(123);

    console.log(processString, processNumber); // string 123

    // ! 제네릭 유틸리티 타입
    // : 타입스크립트에 내장된 일련의 제네릭 타입
    // : 기존 타입을 변환하거나 조작하는데 사용

    // * 1) Partial : 모든 속성을 선택적으로 만들어줌
    //              : Partial<T>

    interface User {
        name: string;
        age: number;
    }

    // 사용자 데이터 예시
    // : 사용자의 초기 데이터 지정 또는 사용자 데이터 입력(생성)
    const users: {[key: number]: User} = {
        // '객체의 속성값'이 객체
        1: {name: '이승아', age: 28},
        2: {name: '이도경', age: 30}
    }

    // 위의 사용자 데이터를 업데이트하는 함수 구현
    // 사용자의 id(key)값을 사용하여 name 또는 age의 값을 업데이트 (수정)

    // id: 1번 변경할 건지, 2번 변경할 건지
    // Partial -> name? / age? 이렇게 변경 User 객체를 옵션으로 (코드의 재사용성)
    function updateUser(id: number, changes: Partial<User>){
        
        // 업데이트 로직 구현
        const user = users[id]; // 객체파일이기에 대괄호

        // 키 값을 가지고 value
        // 3을 넣으면 User with Id not founed가 출력

        if(!user){
            console.log(`User with id ${id} not found`);
        }

        // 변경 사항 적용
        // : 스프레드 연산자를 사용하여 해당 유저의 전체 데이터를 불러와 changes 객체에 담긴 속성의 값을 새로 고침 (업데이트)
        // : 객체의 경우 키의 값이 중복되는 경우 뒤의 속성값으로 업데이트

        users[id] = {...user, ...changes};

        // ...user -> id 값에 가진 객체가 담긴다? 
        // ...changes -> name 또는 age 또는 name age 객체에 가진다?
    }

    // 1 -> {name: '이승아', age: 28}
    // 2 -> {name: '이승아', age: 28, name: 'LSA'}
    // -> {name: 'LSA', age: 28}

    updateUser(1, {name: 'LSA'});
    updateUser(2, {age: 29});
    updateUser(3, {name: '미상', age: 50}); // User with id 3 not found -> 없으니까!

    console.log(users[1]); // { name: 'LSA', age: 28 }
    console.log(users[2]); // { name: '이도경', age: 29 }
    console.log(users[3]); // { name: '미상', age: 50 } -> 값을 할당해줬기 때문에 새로운 객체의 값이 지정


    // * 2) Readonly: 모든 속성을 읽기 전용 속성으로 변경
    //              : 형태가 Readonly<T> (대문자로 명시)

    interface Human {
        name: string;
        age: number;
    }

    let user: Readonly<Human> = {
        name: '이승아',
        age: 29
    }

    // user.name = 'lsa'; Error 읽기 전용 속성이라


    // ? 유니온 타입과 제네릭 함수 작성 예시
    // : 문자열 배열과 숫자 배열 중 하나를 입력받아, 배열의 첫 번째 요소를 반환하는 제네릭 함수 구현

    function getFirstElement<T extends string[] | number[]>(array: T): string | number {

        if(typeof array[0] === 'string'){
            return array[0] as string;
        }else{
            return array[0] as number;
        }

    }

    const firststring = getFirstElement(['apple', 'banana', 'cherry']);
    const firstNumber = getFirstElement([1, 2, 3]);

    console.log(firststring); // apple
    console.log(firstNumber); // 1
    
}