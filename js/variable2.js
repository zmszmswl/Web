// variable2.js
var li; // 호이스팅기능

let ary = new Array(); // 0|1|2| ~ |14| 변수선언 15번보다는 [배열]index 값으로 요소에 접근하고 값을 담도록 하겠다.
ary[0] = 10;

ary=[20,30,15,27]; // 선언 & 초기화
ary[ary.length] = 50;
ary[ary.length] = 60;
ary[ary.length] = 65;
ary[10] = 100; // 11번째에 100을 담으면 나머지는 비어있어서 empty가 뜸 

console.log(ary);
console.log(typeof ary[7]); // undefined

for(let i = 0; i<ary.length; i++){
    console.log(i + '번째' + ary[i]);
}

ary=['사과','바나나','고구마','수박',32]; //가능하면 타입을 맞춰서 써줘


console.clear(); // 이전에 썼던 로그 지우고 아래값을 출력
document.write('<ul>');
for (let val of ary){  // 배열은 for of 확장? 쓰겠습니다
    console.log(val);
    document.write('<li>' + val + '</li>');
}
document.write('</ul>');
//배열에 오브젝트를 담고있음. 여러개의 복합적인 데이터를 담고싶습니다 = 오브젝트 
//(비슷하게 자바에서는 class(퍼멧)에 '인스턴스' new를 이용하여 실체를 만듬 ex. Student st = new Student 해서 st에 학생 이름, 성별, 나이, 점수 등등 담아서 표현)
ary=[
    {name:'홍길동', age:20, phone : '010-1111-2222'},
    {name:'김민수', age:24, phone : '010-3333-4444'},
    {name:'박우용', age:27, phone : '010-5555-6666'},
    {name:'최선식', age:30, phone : '010-7777-8888'}
]

str = '<table border=1>';
for (let person of ary){
    str += '<tr><td>'+ person['name'] + '</td><td>' + person['age']+'</td><td>'+person['phone']+'</td></tr>';
}
str +='</table>';

console.log(str);
document.write(str);


const v1= 'hello'; // 상수는 값을 할당하고나면 변경 불가능 Uncaught TypeError: Assignment to constant variable.
// v1 = 'new'; 값 변경 불가능 //자바에서 final과 비슷함
// 원시타입 vs. 참조타입.
let n1 = 10; //실제 값이 들어있어서 하나를 바꿔도 영향을 미치지않음
let n2 = n1;
n1 = 20;
console.log(n1, n2);

let o1 = {name : 'one'}; //오브젝트(인스턴스)를 참조하고있음
let o2 = o1; //o1을 o2에 할당해주면 바라보고있느것이 똑같이 name : 'one'임 
o2.name='two'; //누구 하나라도 바꿔버리면 바뀜
o1.name='three';
console.log(o1,o2);

const obj = {
    sno: '22-12345',
    sname: 'Hong'
}
obj.sno = '22-22222'; //obj 상수 변수에 값을 새롭게 선언X, obj 참조하는 속성의 값을 변경O
console.log(obj);
// obj= ''; //새로운 값을 할당 => 오류.


// var vs. let : 변수선언.
// var 변수선언 : 변수의 scope(실행하거나 사용하는 범위)=> 전역변수 / 지역변수
let var1 = 'hello'; //전역변수
{
    let var1 = 'new hello';
    console.log(var1);
}
//let과 변수선언해서 지역변수를 타이트하게 체크하는게 변수기능 //{}블록레벨로 변수선언가능
//p.22 전역변수와 전역 객체 속성
var str1 = 'var';
let str2 = 'let';

console.log(this.str1);
console.log(this.str2); // undefined 'let'으로 선언한 변수는 전역객체 this 로 접근이 안됨

function run(){
    console.log(this.str1);
    console.log(this.str2); // undefined 'let'으로 선언한 변수는 전역객체 this 로 접근이 안됨
    console.log(str1);
    console.log(str2);
}
run();
//var의 의미가 다른데 var는 지역변수가 잘안됌.//2번 선언해도 에러가 안읽혀서 오류나기쉬움. 현업에서 에러가 안뜨기때문에 값이 사라지지않게 주의해야함
// var l1 = '';
// var l1 = '';

function localFnc(){ 
    let var2 = 'nice'; //지역변수(local variable) function의 (for블럭, if블럭)블록안에서 사용
    console.log(var2);
    console.log(var1);
}
localFnc(); //함수호출해서 메소드 사용.
// console.log(var2); //영역은 함수{}안에서만 사용됌 지역변수 Uncaught ReferenceError: var2 is not defined
console.log(var1); //전역변수

//호이스팅(hoisting) 자바스크립트 언어 특징으로 인해 런타임 시점에 함수 맨 위로 선언이 이동합니다.
//는 미선언 변수 사용의 사각지대로 인한 에러를 방지하기위한 기법이다. 선언하기 전에 사용한 변수는 호이스팅에 의해
//위로 끌어 올려져 선언 되어있지만, 초기화 되지 않았기때문에 undefined상태인 변수가 된다.
//var는 사용하지만 let은 호이스팅을 하지 않는다. 
console.log(l1); //호이스팅 값이 선언되지 않았지만 변수들을 끌여들여서 제일 먼저 선언하도록 하는것. 호이스팅
var l1 = '';
//let l1 = ''; error
console.log(l1);

var num;
for(num of ary){
    console.log(num.age);
}
console.log(num);


