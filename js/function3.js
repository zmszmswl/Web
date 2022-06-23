// function3.js

function sumNumber() {
    console.log(arguments); //함수가 호출되면 arguments 객체.
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

sumNumber(1, 2, 3, 4, 5);
// sumNumber(1, 2, 3, 4, 5, 6, 7, 8);

// 나머지 파라미터.
function sumParam(...args) { // 갯수가  가변적으로 ...처리. 배열형식으로 args의 값을 가져오도록 하겠음.
    let result = 0;
    args.forEach((val, idx) => {
        result += val;
    }); // callback 함수.
    return result;
}
console.log(sumParam(1, 2, 3, 4, 5, 6));

// 커링 함수. 잘사용안함.
function orderSet(burger, beverage) {
    console.log('버거: ' + burger + ',음료: ' + beverage);
}
orderSet('치즈버거', '콜라');

function orderSet_curring(burger) {
    return function (beverage) { //중요! 함수를 리턴할 수 있다는것.
        console.log('버거: ' + burger + ',음료: ' + beverage);
    }
}
let beverageFnc = orderSet_curring('치즈버거');
beverageFnc('사이다'); // () 함수실행
beverageFnc('환타'); // () 함수실행
//orderSet_curring('치즈버거')('콜라');

const orderSett = burger => beverage => side => yn => count => {
    console.log("세트 : " + burger + "," + beverage + "," + side + ",케첩(" + beverage + "),조각치킨(" + count + "개)");
}
let order = orderSett("치즈버거")("콜라");
console.log(order("프렌치후라이")("y")("2"));

let args = [1, 3, 5];

function anyFnc(...args) { //... 펼침연산자

}
let another = [4, 5, 6];
let otherArgs = [-1, ...args, -2]; // 두 배열요소를 합쳐서 새로운 배열을 생성할 때.
console.log(args.concat(another));

let obj1 = {
    name: 'Hong',
    age: 20,
    weight: 64.7
};
let newObj = {
    name: 'Choi',
    age: 15,
    height: 165.5
};
let obj3 = {
    sno: '12345'
}
let obj2 = {
    ...newObj,
    ...obj1,
    ...obj3
}; // new Object(); 자바스에서 {}중괄호는 오브젝트임
console.log(obj1, obj2);

let comObj = {
    sno: '22-010101',
    sname: 'Hong',
    score: 80,
    hobby: ['reading', 'eating'],
    pet: [{
        cname: '야옹이',
        age: 2
    }, {
        dname: '멍멍이',
        age: 3
    }]
}
// . 점 연산자로 해당되는 속성 가져오기.
comObj.sname; // 이름.
comObj.hobby[0]; // reading.
comObj.pet[0].age; // 2
console.log(comObj.pet[1].dname); // 멍멍이

// 5. 나머지 파라메터의 활용) 함수 정의 방법 예
function restparams(...args) {
    console.log(args);
}
restparams(1, 2, 3, 4);

// )나머지 파라메터 사용 예
const rest2 = (arg1, arg2, ...args) => {
    console.log([arg1, arg2, args]);
}
rest2(1, 2, 3, 4);
rest2(1, 2);
rest2(1);

// ) 나머지 파라메터로 합계 구하기 예
function sum(a, b, ...args) {
    let result = 0;
    if (a != undefined) {
        result = a;
    } else {
        return 0;
    }
    if (b != undefined) {
        result += b;
    }
    args.forEach(function (arg) {
        result += arg;
    })
    return result;
}
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2));
console.log(sum(1));

// ) 나머지 파라메터로 합계 구하기 개선 예
const cum = (a, b, ...args) => {
    let result = 0;
    if (a != undefined) {
        result = a;
    } else {
        return 0;
    }
    if (b != undefined) {
        result += b;
    }
    result += args.length > 0 ? args.reduce((subsum, arg) => subsum += arg) : 0;
    return result;
}
console.log(cum(1, 2, 3, 4));
console.log(cum(1, 2));
console.log(cum(1));

// 화살표 함수 기초

// 함수 :
// function add(a,b){
//     return a+b;
// }

// 화살표 함수 : let add = (a,b) => a+b;

//나머지 파라메터로 곱하기 구하기 예
let multiply = (a, b, ...args) =>{
    let result = a * b;
    for (let i = 0; i < args.length; i++){
        result *= args[i];
    } //수정
    return result;
}
console.log(multiply(1,2,3,4));
//파라메터 없는 가장 단순한 화살표 함수는 다음과 같이 표기할 수 있음
const alert = () => console.log('error');
//콜백 함수와 익명함수(함수 이름이 없는 함수)에도 화살표 함수는 그대로 사용할 수 있음
setTimeout(()=>console.log('timeout', 3000));
items.forEach(item=>{
    console.log(item.value);
})


// p.84 함수 스코프 체인 예
var a = 1;
var b = 5;

function outerFunc() {
    function innerFunc() {
        a = b;
    }
    console.log(a);
    a = 3;
    b = 4;
    innerFunc();
    console.log(a);
    var b = 2;
    console.log(b); // 2 
}
outerFunc();
console.log(b); // 5