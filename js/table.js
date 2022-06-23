// object_table.js

let data = [{
        sname: 'Hong',
        age: 15,
        height: 167.8,
        weight: 64.5
    },
    {
        sname: 'Hwang',
        age: 20,
        height: 175.3,
        weight: 72.3
    }
];

class Table {
    // 생성자.  constructor라는 키워드로 생성자를 만듬.
    constructor(ary) {
        this.aryData = ary; // [{},{}]
    }
    // 메소드.
    createTable() {
        this.tag = '<table border=1><tr>';
        //헤더정보. <thead>...</thead>
        for (let field in this.aryData[0]) { // {sname: 'Hong', age:15}
            this.tag += '<th>' + field + '</th>';
        };
        // this.tag += '<th>이름</th><th>나이</th>'
        this.tag += '</tr>';

        // this.tag += '';

        //바디정보. <tbody>...</tbody>
        this.aryData.forEach((val, idx) => {
            // console.log(val);
            this.tag += '<tr>';
            for (let field in val) {
                this.tag += '<td>' + val[field] + '</td>';
            }
            this.tag += '</tr>'
        });
        this.tag += '</table>'

        return this.tag;
    }
}

let table = new Table(data); // 매개값으로 받은 배열 데이터를 표형식으로 화면 출력.
let str = table.createTable(); // => 표 형식으로 화면출력.
console.log(str);
document.write(str);

console.log('HongKilDong'.length); // 11
let names = ['Hong', 'Hwang', 'Kim', 'Park'];
names.push('Choi')

let searchName = names.find(function (val) { // 함수가 매개값으로 옴 // find 배열요소에서 어떤값을 찾아와서..
    // return val == 'Hwang'; // true => 반환.
    return val.length == 4;
});
console.log(searchName);

