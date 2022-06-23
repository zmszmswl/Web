// variable.js

console.log('Hello, World!');
document.write('<h3>Hello, World!</h3>');

//변수에 하나의 값만 담을 수 있음
let num = 0;
num = 'Hello'; //String
num = 10;
nem = 'ten';
num = true;  //boolean
num = null; // object => class의 인스턴스
let num1; // undefined 값을 선언하지 않고 변수 이름만 선언

console.log(typeof num);
console.log(typeof num1);  // undefined
// 중요!! 자바는 코드를 순차적으로 실행

num1 = 100;
let num2 = 200; // 변수의 선언이 없이 사용 :  전역객체(window)의 속성.
console.log(num1 + num2);

console.log(window);

// 자바에서 하는방법
// class Student{
//     String sno;   //이건 값을 담고 있는/ 담기 위한 필드
//     String sname;
//     void showInfo(){ //필드의 값을 리턴해주는 기능을 담고 있는 메소드
//         return this.sno + this.sname;
//     }
// }
// Student student = new Student(); //new로 Student인스턴스를 student라는 요소에 할당하겠다.
// student.sno;  //메소드
// student.showInfo; //메소드

//window.alert('안녕하세요'); 127.0.0.1.5500 내용: 안녕하세요

//변수 :  학생이름, 학생번호, 영어, 수학 점수를 담고싶으면? 
//class를 선언해서 object 선언 후 필드(속성값)를 넣어줌

//방법1)
let student = new Object(); //object student 선언
student.sno = '22-0123';
student.sname = '홍길동';
student.engScore = 90;
student.mathScore = 80;
console.log(student);

//방법2)
let person = {   //object person 선언
    fname:'김민수', //속성:값
    age : 20,
    height : 175.5,
    showInfo : function(){ //속성:값
        return this.fname + ',' + this.age + ',' + this.height;
    }
};
person.weight = '68.5';

//person 오브젝트의 필드(속성) 값을 읽는 여러가지 방법
console.log(person);
console.log(person.fname);
console.log(person.showInfo);   //속성만 보고싶을땐 ()를 빼줌
console.log(person.showInfo());  //메소드는 ()를 붙여줌
console.log(person['age']);
let field = 'height';
console.log(person[field]); //필드 선언하여 읽기

// 전체 필드를 for loop .. in 반복문을 통과하면 필드가 사라짐
// debugger;
for(let field in person){ //person 오브젝트를 for로반복하면서 변수 field에 담는 반복문
    console.log(field, '=>' , person[field]); 
};
console.log(field); //스크립트 전체 영역에서 쓰는 필드값

//변수를 선언할때마다 ';' 붙여주자
let x = 10;
let y = 20;

// 변수 : me => 이름, 취미, 연락처, 주소, 소개:이름,취미,연락처 반환.
let me= {
    fname: '박은지',
    hobby: '손톱정리',
    tel:'010-000-0000',
    add:'DEAGU',
    
    introduce : function(){
        return this.fname + ',' + this.hobby + ',' + this.tel;
    }
};
console.log(me.introduce());

let mee= {
    fname: '박은지',
    hobby: '손톱정리',
    tel:'010-1111-2222',
    add:'DEAGU',
    
    introduce : function(){
      for(let field in mee){
          console.log(mee[field]);
      }
    }
};
console.log(mee.introduce());

