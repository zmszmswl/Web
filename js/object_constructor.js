// object_constructor.js

// 객체 생성.  객체안에 소속되어 있는 함수는 메소드
function Student(sno, sname, age) {
    this.sno = sno; // this => 전역객체(window), 속성에 this가 꼭 붙어야함
    this.sname = sname;
    this.age = age;
    this.showInfo = function () {
        return '이름은 ' + this.sname + ' 나이는 ' + this.age;
    }
}
let s1 = new Student('22-1111', '홍길동', 19); // new로 s1 인스턴스를 호출해서 Student주소값을 던져줌. 함수 호출
let s2 = s1;
s2.sno = '22-2222'
console.log(s1.showInfo());

///////////////////////////////////////////////////////////////////////////
function Table(param) {
    this.data = param;
    this.tag = '';
    this.fields = ['sname', 'age', 'height', 'weight'];

    this.createTable = function () {
        this.tag += '<table border = 1>';
        this.createHead();
        this.createBody();
        this.tag += '</table> '
       return this.tag;
    }
//     this.createHead = function () {
//         this.tag += '<thead><tr>';
//         this.fields.forEach()
//         this.tag += '</th></thead>'
//         return str;
//     }

//     this.createBody = function () {
//         this.tag = '<tbody>';
//         this.data.forEach()
//         this.tag += '</tbody>';
//         return str;
// } 힌트

this.createHead = function (fields) {
    this.tag += '<thead><tr>';
    // let str = this.tag;
    this.fields.forEach(element =>{  // 화살표 함수는 무조건 대표하는 객체를 가리키고있음.
        this.tag += '<th>' + element + '</th>' // this.tag => 사용.
    });
    // for(let field in this.fields){
    //     console.log(this.fields[field]);
    //     str += '<th>' + fields[field] + '</th>';
    // }
    // console.log(str)
    //this.tag = str;
    // this.tag += '</th></thead>'
    // console.log(this.tag)

        // for(let field of this.fields){
    //     console.log(field);
    //     str += '<th>' + fields[field] + '</th>';
    // }
    // console.log(str)

    this.tag += '</th></thead>'
}

this.createBody = function (data) {
    this.tag += '<tbody>';
    // let str = this.tag;
    this.data.forEach(element => {
        this.tag ='<tr>'
        for(let f1 in element){
            this.tag += '<td>' + element[f1] + '</td>'
        }
        this.tag += '</tr>'
    });
    this.tag += '</tbody>';
}
}

// function () { this => window} / new 함수 => this: {}객체(object) / 이벤트 => this: 이벤트 대상.
let data = [{   // {}객체 []배열
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
]

let t1 = new Table(data);
let str = t1.createTable();
document.write(str);