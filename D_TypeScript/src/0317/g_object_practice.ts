{

    // ! 문제 1
    // 다음 객체 타입을 정의하고 해당 타입을 가진 객체를 하나 생성
    // person : 객체는 name(문자열), age(숫자), hobby(문자열, 선택적) 속성을 가져야한다.

    const person: {
        name: string;
        age: number;
        hobby?: string; 

    } = {
        name : '이도경',
        age : 20,
        // hobby: '등산'
    }


    // person이 값이 없으면 오류가 나타남!

    // ! 문제 2
    // readonly를 사용하여 car 객체 타입을 정의하고, model(읽기 전용, 문자열)과 year(숫자) 속성을 포함하는 객체를 생성
    // + model 속성에 다른 값을 할당하려고 할 때 발생하는 오류를 설명

    let car: {
        readonly model : string;
        year: number;
    } = {
        model : 'Hyundai',
        year : 2023
    }

    // car.model = '차량종류'; -> error


}