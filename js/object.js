// object.js
// 객체(object) == 자바의 인스턴스(클래스의 구조를 따라 실체하나 만들어놓은것.)와 비슷
const student = { //자바에서는 클래스를 만들어서 인스턴스 student 1개 만든것과 같음 
    sno: '22-0123',
    sname: '홍길동',
    mathScore: 80,
    engScore: 90,
    age: 20,
    showInfo: function () {
        return '이름은 ' + this.sname + ', 나이는' + this.age;
    }

}

const student2 = { //자바 클래스를 만들어서 인스턴스 student 1개 만든것과 같음 
    sno: '22-0124',
    sname: '길길동',
    mathScore: 88,
    engScore: 99,
    age: 21,
    showInfo: function () {
        return '이름은 ' + this.sname + ', 나이는' + this.age;
    }
}

class Student {
    constructor(sno, sname, age) { //생성자. 키워드는 this.를 붙여줌
        this.sno = sno;             //속성은 따로 안쓰고 this 라는 키워드를 붙이면 속성임
        this.sname = sname;
        this.age = age;
    }
    // 메소드.
    setMathScore(mathScore){ // 매개값
        this.mathScore = mathScore;
    }
    setEngScore(engScore) {
        this.engScore = engScore;
    }
    showInfo(){
        return '이름은 ' + this.sname + ', 나이는' + this.age;
    }
}

const student3 = new Student('22-0111', '김익수', 23);  //정의되어있는 속성값만 가짐.
student3.setMathScore(88);
student3.setEngScore(90);

console.log(student2.showInfo());
console.log(student3.showInfo());