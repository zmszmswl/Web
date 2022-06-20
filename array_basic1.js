// array_basic1.js

let names = [];
names.push('이희수');
names.push('인은지');
names.unshift('박소현'); // 박소현, 오지민, 이희수, 인은지 
names.splice(1, 0, '오지민'); // 추가, 수정, 삭제. (0, 0, '새 배열 요소 값')
names.splice(4, 0, '김가윤', '박경아' );

let newNames = [];
names.forEach(function (val, idx){
    if(idx % 2 == 0)
    newNames.push(val);
});

console.log(names); // 박소현, 오지민, 이희수, 인은지, 김가윤, 박경아

// map()새로운 배열을 만들어주는 기능
let mapAry = names.map(function(val, idx, ary){
    if(idx % 2 == 0 ){
        return val;
    }
}); // mapping A -> B
console.log(mapAry);

let filAry = mapAry.filter(function(val,idx){
    return val; // 박소현 , undefined, 이희수 , undefined, 김가윤 undefined
}); // 조건을 만족하는 값들만 새로운 배열 요소.
console.log(filAry)

let resultAry = names.map((val, idx) => {
    if(idx % 2 == 0) {
        return val; // 반환
    }
}).filter((val, idx) => {
    return val;
}) 
console.log(resultAry);
