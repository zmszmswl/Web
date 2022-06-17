// function_table.js

// 테이블 생성함수.
function createTable(aryData) { // 'createTable' 함수를 정의해보자
    let fields = ['sname', 'age', 'height', 'weight']; // 속성값
    // for (let element of fields){
    //     console.log(element);
    // }
    let tag = '<table border = 1>';
    let head = createHead(fields); // <thead><tr><th> ... </th></tr></thead> head로 createHead 일부분 사용하겠다
    tag += head; // head가 만들어준 값을 tag에 누적시키겠다.

    let body = createBody(aryData); // <tbody><tr><td>값</td>...</tr></tbody> 함수에 의해 만들어진 'createBody'함수
    tag += body;

    tag += '</table>'
    // <table>...</table>
    return tag;
}
// 헤더 부분 함수. function(num) {}
function createHead(fieldDate) {  // [{sname: ?,age:?,height:?,weight:?},{},{}] fieldDate 하나의 오브젝트 타입
    let str ='<thead><tr>';     
    fieldDate.forEach(element => {
        str +='<th>'+element+'</th>'
    });
        str +='</tr></thead>'
        return str;
}
// 바디 부분 함수.
function createBody(bodyDate) {
    let str = '<tbody>';
    // bodyDate.forEach(elem => {  반복문 방법 1
        for(let elem of bodyDate){  //elem => {sname: ?,age:?,height:?,weight:?} 반복문 방법 2
            str+='<tr>';
        for(let field in elem){   // for in은 오브젝트의 속성의 갯수만큼 루핑돌아 읽어주겠다.
            str += '<td>' + elem[field] + '</td>'; // elem.sname, elem.age, elem.height, elem.weight
        }
        str += '</tr>'
        }    
    // });
    str += '</tbody>';
    return str;
}

let data = [{
        sname: '홍길동',
        age: 15,
        height: 167.8,
        weight: 64.5
    },
    {
        sname: '이찬희',
        age: 20,
        height: 175.3,
        weight: 72.3
    },
    {
        sname: '김민수',
        age: 24,
        height: 182.3,
        weight: 79.3
    }
];

let str = createTable(data); // 'createTable' 함수호출
document.write(str);