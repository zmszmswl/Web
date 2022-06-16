// table.js

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
]

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

class Estimate {
    // 생성자
    constructor(param){
        this.unit = param;
    }
    // 메서드
    // 견적가 얻기 메서드
    getEstimate(unitType, width, height){
        let priceinfo = this.unit.find(item=>item.type == unitType); //function(val, idx, ary)
         return priceinfo.price*width*height
    }
    // 배열에 요소 추가 메서드
    addUnit(unit){
        this.unit.push(unit);
    }
}
let unitinfo = [{type: 'wood', price: 100}, {type: 'iron', price: 300}, {type: 'plastic', price: 200}];
const estimator = new Estimate(unitinfo); //클래스로 만든 객체는 new 키워드로 객체를 실행해 실제 동작하는 실행 객체를 할당해야 합니다.
let amt = estimator.getEstimate('iron',20, 20);
console.log(amt);

// object 타입으로 기능.
let obj = {};
obj.unit = unitinfo;
obj.getEstimate = function(unitType, width, height){
    let priceInfo = this.unit.find(item => item.type == unitType);
    return priceInfo.price*width*height;
}
obj.addUnit = function(unit) {
    this.unit.push(unit);
}
let result = obj.getEstimate('wood', 20, 20);
console.log(result);
