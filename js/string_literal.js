// string_literal.js

let str = 'Hello'; // "Hello"; 문자열 표현
str = `Hello`; // 문자열 표현 6버전으로 넘어오면서 문자열을 표현해주는 기호가 추가됌 ~밑의 ` 백킷?

let person = {
    name : "hong",
    age : 20,
    showInfo : function () {
        //return '이름은 ' + this.name + '나이는 ' + this.age  // 문자열을 표현할때는 + 연산자로 표현했었음. this 오브젝트가 가지고있는 속성을 반환하겠습니다.라는 메소드
        return `이름은 ${this.name}, 나이는 ${this.age}`;
    }
}
console.log(person.showInfo());

console.log(`나의 정보는 ${person.name}`); // 템플릿 리터럴? 문자열에서 변수의 값을 읽어오겠다고 이해하면됌

console.log(`${person.age >= 20 ? '성인' : '청소년'}`); // 리터럴을 이용한 연산식 사용법

let strings = 'This\nis\nboy';
strings = `This
is
a
boy`
console.log(strings);

"This is an apple".indexOf('apple');
"This is an apple".charAt(10);

let jm = `950101-1234567`;
jm = '980302-2241237;';

function checkGender(num = ''){
    let jnum = num.replace('-', ''); // replace 변경하겠습니다. 이 문장의 - 를 없앰.
    console.log(jnum);
    jnum = num.substr(-7, 1);  // 1,2/3,4
    console.log(jnum);
    
    switch(jnum){
        case '1':
        case '3':
            return '남자';
        case '2':
        case '4':
            return '여자';    
    }
  
    // console.log(`${jm.charAt(7) = 1 ? '남자' : '여자'}` );
    // console.log(`${jm.substr(7,1) = 1 ? '남자' : '여자'}` );
    return '남자' || '여자';
}
let result = checkGender(jm)
console.log(result);
