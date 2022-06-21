// for_loop.js

// 배열 관련 반복되는 메소드.
// forEach :void (리턴값이 없음), map:[배열] A -> A' , 똑같은 갯수의 새로운 배열이 만들어짐
// : , filter : [배열] A -> B 가지고온 전체 데이터에서 필터 조건을 걸면 (전국 병원중에서 서울에 있는 의료원만 검색해서 대상을 줄일 수 있음)
// : , reduce : 문자열, Number, [배열], {} 어떤 방법으로 집계하겠습니다 하고 다양한 메소드를 넣을 수 있음.

let ary =[3, 5, 8, 9, 12]; // 배열객체 : new Array();와 같다. let ary = []; 오브젝트 선언때도 {} 했던것 처럼 []로 선언하면 더 직관적이니 이렇게 하자
ary.push(5); // 배열의 제일 마지막 요소에 추가적인 값을 담음. 제거는 pop();
ary.unshift(7) // 배열의 제일 앞 요소에 추가적인 값을 담음. 제거는 shift();
// 7, 3, 5, 8, 9, 12, 5
ary.splice(3, 1); // 3번째 1개의 요소를 가져오는데 대체할 값이 '' 이면 삭제됌! // 7, 3, 5, 9, 12 ,5

ary.forEach(elem => console.log(elem));

// 1. forEach
// 결과값을 받아오면 언디파인값
let newAry = []; // 이 배열에 값을 계속 담아주겠습니다.

let result = ary.forEach(firstCallBack); // 매개변수firstCallBack 리턴값이 없기때문에 매개변수 필요 // 결과값을 리턴해주는게 없음

function firstCallBack(elem) {
    // console.log(elem)
    newAry.push(elem);
}

// 2. map 
result = ary.map(elem => elem *2); // A -> A' elem=변수 이름 하고싶은거 아무거나 

console.log(newAry); // 원본값
console.log(result); // 원본값 *2

// 3. filter A -> a
result = ary.filter((elm, idx, arry) => idx > 3); // 만족하는 true 값만 반환해주는것. 매개값(값 인덱스 배열요소)
console.log(result);

// 4. reduce A -> 문자열, Numver, [], {} return 다음으로 오는 반환되는 값이 무엇이냐가 중요
result = ary.reduce((accum, curr, currIdx, arry) => {
    console.log(accum, curr, currIdx);
    return accum + curr; // 반환되는 값이 무엇이냐에 따라 그다음 순번의 초기값으로 쓰여짐 리턴이 없으면 undefined

}, 0 ); // 콜백함수,이번 순번의 요소 리턴값에 의해 그것을 초기값으로 하겠다.  => //  초기값: 리턴하고싶은 형태의 초기값을 지정 Number

result = ary.reduce((accum, curr) => {
    console.log(accum, curr);
    accum.push(curr * 2);
    return accum;
}, []); // 2. map 같은 기능. 초기값[]배열

result = ary.reduce((accum, curr, currIdx) => {
    if(currIdx > 3){
        accum.push(curr * 2);  // 인덱스 번호가 3 이상인 요소를 가져와서 *2 한 다음에 새로운 배열에 넣어주겠습니다.
    }
    return accum;               // 아닐경우에 원래 accum에 있는걸 쓰겠습니다.
}, []); // 3. filter, map
console.log(result);

