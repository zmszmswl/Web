// array_basic.js

// let arr = new Array();
let arr = []; // new Array(); new Object()/ {}
arr[0] = 'Hello';
arr[1] = 100;
arr[2] = true;

delete arr[1]; // 비어있어서 undefined 으로 변경

console.log(arr.length);
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// 확장 for
for(let val of arr){
    console.log(val);
}

// forEach
arr.forEach((val,idx) => {
    console.log(`${idx} => ${val}`); // 배열의 값 undefined 이면 반복에서 제외.
});

arr.push('Apple'); // 추가.
arr.unshift('Banana') // 제일 앞에 추가.
arr.pop(); // 마지막위치부터 삭제.
arr.shift(); // 첫번째 삭제.
arr.splice(0,1); // 추가, 수정, 삭제. (0, 0, '새 배열 요소 값')

arr.forEach((val,idx) => {
    console.log(`${idx} => ${val}`); // 배열의 값 undefined 이면 반복에서 제외.
});
