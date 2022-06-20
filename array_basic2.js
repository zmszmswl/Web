let data = `[{"id":1,"first_name":"Tabbie","last_name":"Sparry","email":"tsparry0@yahoo.co.jp","gender":"Female","salary":1639},
{"id":2,"first_name":"Coriss","last_name":"Babbage","email":"cbabbage1@simplemachines.org","gender":"Female","salary":1271},
{"id":3,"first_name":"Margie","last_name":"Kaplan","email":"mkaplan2@newsvine.com","gender":"Female","salary":2843},
{"id":4,"first_name":"Eduardo","last_name":"Choulerton","email":"echoulerton3@mit.edu","gender":"Polygender","salary":1654},
{"id":5,"first_name":"Sauveur","last_name":"Bertelmot","email":"sbertelmot4@prweb.com","gender":"Male","salary":2128},
{"id":6,"first_name":"Milka","last_name":"Tomkowicz","email":"mtomkowicz5@free.fr","gender":"Genderfluid","salary":1300},
{"id":7,"first_name":"Leanna","last_name":"Camellini","email":"lcamellini6@clickbank.net","gender":"Female","salary":2674},
{"id":8,"first_name":"Ward","last_name":"Johnsson","email":"wjohnsson7@who.int","gender":"Genderqueer","salary":4781},
{"id":9,"first_name":"Hunfredo","last_name":"Fincken","email":"hfincken8@slate.com","gender":"Male","salary":4266},
{"id":10,"first_name":"Stephanus","last_name":"Staries","email":"sstaries9@spiegel.de","gender":"Male","salary":4866},
{"id":11,"first_name":"Craggy","last_name":"Dinnis","email":"cdinnisa@ibm.com","gender":"Male","salary":3877},
{"id":12,"first_name":"Madelene","last_name":"Bloggett","email":"mbloggettb@hc360.com","gender":"Female","salary":1853},
{"id":13,"first_name":"Garrott","last_name":"Scrammage","email":"gscrammagec@behance.net","gender":"Male","salary":3406},
{"id":14,"first_name":"Sofia","last_name":"Deathridge","email":"sdeathridged@youku.com","gender":"Female","salary":2955},
{"id":15,"first_name":"Adorne","last_name":"Gorke","email":"agorkee@indiegogo.com","gender":"Female","salary":4175}]`;

let objAry = JSON.parse(data); // JSON.parse() : 문자열 => 오브젝트.
console.log(data);
console.log(objAry);

let over3000 = objAry.filter((val, idx) => { //{id:?, fname:?, lname:?, salary:?... }
    return val.salary >= 3000; // filtering 처리.
}).map((val, idx) => {
    let obj = {}; // A -> B 타입을 바꿈
    obj.name = `${val.last_name}, ${val.first_name}`;
    obj.sal = val.salary;
    return obj;
});
console.log(over3000);
console.clear();

// Female 값 평균값을 기능 구현.

let avg, sum, cnt;
sum = 0;
cnt = 0;
objAry.filter(val => val.gender == 'Female')
    .forEach(val => {
        sum += val.salary;
        console.log(val);
        cnt++;
    });
avg = sum / cnt;
console.log(`여사원의 급여 평균은 ${avg}`);

let salaries = [];
objAry.forEach(val => salaries.push(val.salary));
// salaries = objAry.map(val => val.salary);
console.log(salaries);

// function getMaxValue(ary) {
//     let max = salaries[0];
//     for (let i = 0;  i < salaries.length; i++) {
//         if (salaries[i] > max) {
//             console.log(salaries[i]);
//             max = salaries[i];
//         }
//     }
// }

function getMaxValue(ary = []) {
    // 배열요소에서 제일 큰 값을 반환하는 함수.
    let max = Number.MIN_SAFE_INTEGER;
    ary.forEach(val => {
        if (max < val) {
            max = val;
        }
    })
    return max;
}
let maxVal = getMaxValue(salaries);
console.log(`가장 큰값 : ${maxVal}`);

function sortAscend(ary) {
    // 오름차순 정렬하는 함수.
    let numAry = ary;
    let newAry = [];
    ary.forEach(val => {
        let maxVal = getMaxValue(numAry);
        numAry.push(maxVal);
        let idx = numAry.indexOf(maxVal);
        numAry.splice(idx, 1, 0);
    });
    return numAry;
}
sortAscend(salaries);
console.log();

// reduce 메소드. [1, 2, 3, 4]
//accum: 그 전 순번을 리턴해줌, curr: 이번 순번의 배열에 들어있는 값, 인덱스 값, 배열 그자체
result = salaries.reduce(function (accum, curr, curIdx, ary) {
    console.log(`누적 ${accum}, current 값 ${curr} => 두 수의 합 ${accum+curr}`);
    return curr + accum;
}, 0); // 초기값 ..  map, filter 메소드
console.log(`최종 결과 : ${result}`)

result = [1, 2, 3, 4].reduce(function (accum, curr) {
    if (curr % 2 == 0)
        accum.push(curr); // 배열에 추가.
    return accum;
}, []); // accum = [1] ,[1,2], [1,2,3], [1,2,3,4]
// result = [1, 2, 3, 4].map(val => val);
result = [1, 2, 3, 4].filter(val => {
    if (val % 2 == 0) {
        return val;
    }
})

console.log(result);

console.clear();
// <ul><li>Apple</li<li>Banana</li><li>Cherry</li></ul>

result = ['Apple', 'Banana', 'Cherry'].reduce((accum, curr, currIdx, ary) => {
    if (currIdx == 0) {
        accum = '<ul>';
    }
    accum += `<li>${curr}</li>`;
    if (currIdx == ary.length - 1) { // 인덱스값이 마지막값일때
        accum += '</ul>';
    }
    console.log(accum); // <ul><li>Apple</li><li>Banana</li><li>Cherry</li><li>
    return accum; // 리턴 값이 없으면 초기값이 undefined언디파인이 써짐
}, '');
console.log(result);
document.write(result);

result = [3, 2, 4, 1, 5].reduce(function (accum, curr) {
    if (accum < curr)
        return accum;
    else return curr;
}, Number.MAX_SAFE_INTEGER); // max 값을 반환. 문제1)


// reduce 합을 구하기
result = [ 3, 2, 4, 1, 5].reduce(function (accum, curr){
    // console.log(`누적 ${accum}, current 값 ${curr} => 두 수의 합 ${accum+curr}`);
    return curr + accum;
}, 0);
console.log(`최종 결과 : ${result}`)

// reduce 평균 구하기
result = [ 3, 2, 4, 1, 5].reduce(function (accum, curr, currIdx, ary){
    if (currIdx == ary.length -1){  // 마지막 순번일 경우에.
        return (accum +curr) / ary.length;
    }
        return accum + curr;
    }); // 평균 구하기.
console.log(`최종 결과 : ${result}`);


Math.PI
// let avg, sum;

// let avg = objAry.filter((val, idx) => {
//     return val.gendar = Female
// }).map((val, idx) =>{
//     let obj={}
//     obj.sal = val.
//     return obj;
// })
// console.log(`여사원의 급여 평균은 ${avg}`);

// let avg = objAry.filter((val, idx) => {
//     if (val.gendar == 'Famale') {
//         let sum;
//         sum.forEach(val => {
//             salary
//             console()
//         });
//     }
//     return
// });
// console.log(`여사원의 급여 평균은 ${avg}`);