// array_method.js

// some: 조건을 하나라도 만족하는 요소 true / false, 
// every: 조건을 다 만족하는 요소 , 
// find: 조건 찾기(1건 첫번째 요소의 값을 가져옴), findIndex: 인덱스
// index0f: 배열요소 => 인덱스 값 반환
// sort(); 정렬.
// split(구분자); : 문자열 => 배열
// join(구분자) : 배열 => 문자열

let idx = "This is a story".indexOf("st");
idx = [1, 2, 3, 4, 5].indexOf(8); // -1 찾고자하는 문장이 없음

let str = `Recent activity
When you take actions across GitHub, we’ll provide links to that activity here.`
let strAry = str.split(' '); // 반환타입이 배열.
idx = strAry.indexOf('activity'); // lastIndexOf();
let names = ['박은지', '윤정은', '박지혜', '김나희'];
idx = names.indexOf('김나희s');

let result = names.find(function (elem, idx, ary) {
    // console.log(ary);
    return elem == "김나희"
});
result = [6, 4, 3, 21, 14].findIndex((elem, idx, ary) => { // 첫번쨰 요소의 값을 가져옴
    return elem % 7 == 0;
});
result = [6, 4, 3, 21, 14].some((elem, idx, ary) => {
    // console.log(a, b, c);
    return elem > 20; // 만족하는 요소(값)이 하나 있으면 true; 하나도 없으면 false
});
result = [6, 4, 3, 21, 14].every((elem, idx, ary) => {
    return elem % 2 == 0; // 모든 조건이 만족해야 true 하나라도 틀리면 false
});
console.log(result);

console.clear();

let tempAry = [];
for (let i = 0; i < 5; i++) {
    let temp = parseInt(Math.random() * 10); // 0 <= x < 1 => 1 ~ 10 까지의 임의 수. // 정수로 바꿔주는 parseInt
    console.log(temp);
    tempAry.push(temp);
}
console.log(tempAry)

// 1. tempAry 배열의 값이 다 짝수인지 확인
result = tempAry.every((elem) => {
    return elem % 2 == 0;

});
console.log(result);
// 2. tempAry 배열의 값 중에 3의 배수 존재 확인.
result = tempAry.some((elem) => {
    return elem % 3 == 0;
})
console.log(result);
// 3. 5보다 큰 값이 있으면 그 값을 반환. (1개)
result = tempAry.find((elem) => {
    return elem > 5;
})
console.log(result);
// 4. 3번 문제 모두 반환
result = tempAry.filter((elem) => elem > 5); // 만족하는 true 값만 반환해주는것. 매개값(값 인덱스 배열요소)
console.log(result);

console.clear();
result = [6, 4, 3, 21, 14].sort(function (a, b) { // a,b는 순서임
    // if (a < b) { // 6, 4 양
    //     return -1; // 오름차순 정렬
    // } else {
    //     return 1; // 내림차순 정렬
    // }
    // return a-b; // -값이 오면 오름차순
    // return b-a; // +값이 오면 내림차순
    console.log(a, b);
    return a - b; // 음의 값 :  오름차순
});

let objAry = [ // 오브젝트 타입으로 담은 데이터 여러개
    {
        name: "홍길동",
        age: 18,
    },
    {
        name: "김민수",
        age: 20,
    },
    {
        name: "박세민",
        age: 19,
    }
]
console.clear();
console.log("홍" < "박"); // a b c 오브젝트 타입은 기준이 없음. 기준을 알려줄 콜벡함수가 필요함 function (a, b)
result = objAry.sort(function (a, b) {
    // if(a.name < b.name){
    //     return -1;
    // }else {
    //     return 1;
    // }
    // return a.name < b.name ? -10 : 10;// 이름 오름차순 정렬.
    return a.age < b.age ? -1 : 1;
});
result = ['홍길동', '백민규', '김상우'].join('-'); // 문자열로 변환

// 예제
names = '권소정, 김하은, 유선희, 김가윤'; // =>'권소정, 김가윤, 김하은, 유선희'
result = names.split(', ');
result = result.sort(function (a , b) {
    return a < b ? -10 : 10;
});

result = result.join();

console.log(result);



strAry = 'Littering'.split(''); // 반환타입이 배열이라 배열로 바꿔줌
let cnt = 0;
strAry.forEach((elem) => {
    cnt += elem == 't' ? 1 : 0;
    // console.log(cnt);
});

cnt = strAry.reduce((accum, curr) => {
    accum += curr == 't' ? 1 : 0;
    return accum;
}, 0);
// console.log('cnt:' + cnt);