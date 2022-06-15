// function1.js

function sum(n1, n2){
    return n1+n2;
}
console.log(sum(10,20));
console.log(sum('10','20')); // '문자열' + '문자열'

function minus(v1,v2) {
    return v1-v2;
}
console.log(minus(20,10));
console.log(minus('20','10'));

// 방법1)
function sumAry(ary){
    let sum = 0;
    for(let arr of ary){
        sum+=arr;
    }
   return sum;
}

// 방법2)
function sumAry(ary){
    let sum2 =0;
  for(let i=0; i<numAry.length; i++){
         sum2 += ary[i]; 
     }
     return sum2;
 }
let numAry = [20, 27, 33, 19, 44];
let result = sumAry(numAry);
console.log('배열의 합 : ' + result);
document.write('배열의 합 : ' + result);


//메소드의 매개값으로 함수 : 콜백함수.
result=0;
numAry.forEach(function (val, idx, ary) { 
    if(val%2 == 1){
    console.log(val,idx,ary)
    result = result + val;
}
    // if(idx%2 ==0){ //짝수 배열의 합
    //     console.log(val,idx,ary)
    //     result = result + idx;
    // }
}); 
console.log('홀수 배열의 합 : ' + result);
