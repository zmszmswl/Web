// function2.js

//함수정의구문.
function sumAry(ary) { //매개변수(parameter).
    let result = 0;
    for (let i = 0; i < ary.length; i++) {
        result += ary[i];
    }
    return result;
}
// const sumAry = function(ary){...} => 함수정의문 => 함수표현식처리.

let args = [1, 2, 3, 4, 5]; //매개값(argument)
sumAry(args); //실행문 호출

let arrNum = [1, 2, 3];
sumAry(arrNum);

//함수표현식.
const sum = function (num1, num2) {
    if (!num1) { //undefined -> false 의미. (null, 0, '')
        num1 = 0; //num1의 값이 없을때 num1을 0값으로 만들어주겠다.  
    }
    num2 = num2 == undefined ? 0 : num2; //삼항연산자.
    return num1 + num2;
}
console.log(sum); //함수정의문() 이 출력 
console.log(sum()); //NaN
console.log(sum(10)); //30은 사용안됌 매개값 타입과 갯수를 맞추기 

const sum2 = sum; //함수정의문.
console.log(sum2(10, 20));

console.log(sumAry);

// const sayHello = function(name) {
//     return 'Hello' + name;
// }

// console.log(sayHello('홍길동'));

//함수표현식.
const sayHello = name => 'Hello' + name; //화살표함수. 실행문이 1개일째 중괄호 블록 삭제가능
// 메소드의 매개값(콜백함수)
console.log(sayHello('홍길동'));
let arr = ['홍길동', '김영수', '최민식'];
arr.forEach((val /*, idx, ary*/ ) => console.log(sayHello(val))); // forEach() 매개값이 함수



// 1. 배열의 각 요소중에 짝수의 값만 더하도록 sumEven(args);
// 2. 배열의 홀수번째 요소의 합 sumOdd(args);
// forEach 함수 자체가 반복문임!!!! (값 인덱스 배열전체)
arrNum = [29, 34, 13, 55, 29, 43];
const sumEven = function (arr) {
    let result = 0;
    arr.forEach(function (val, idx, ary) {
        if (idx % 2 == 0) {
            result += val;
        }
    })
    return result;
};
console.log(sumEven(arrNum));

const sumOdd = function (arr) {
    let result = 0;
    arr.forEach(function (val, idx, ary) {
        if (idx % 2 == 1) {
            result += val;
        }
    })
    return result;
};
console.log(sumOdd(arrNum));

// arrNum.forEach() => console.log(sumEven(arrNum));
// arrNum.forEach() => console.log(sumOdd(arrNum));

