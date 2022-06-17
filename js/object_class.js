//object_class.js

class Estimate {
    // 생성자
    constructor(param) {
        this.unit = param;
    }
    // 메서드
    // 견적가 얻기 메서드
    getEstimate(unitType, width, height) {
        let priceinfo = this.unit.find(item => item.type == unitType); //function(val, idx, ary)
        return priceinfo.price * width * height
    }
    // 배열에 요소 추가 메서드
    addUnit(unit) {
        this.unit.push(unit);
    }
}
let unitinfo = [{
    type: 'wood',
    price: 100
}, 
{
    type: 'iron',
    price: 300
}, 
{
    type: 'plastic',
    price: 200
}];
const estimator = new Estimate(unitinfo); //클래스로 만든 객체는 new 키워드로 객체를 실행해 실제 동작하는 실행 객체를 할당해야 합니다.
let amt = estimator.getEstimate('iron', 20, 20);
console.log(amt);

// object 타입으로 기능.
let obj = {};
obj.unit = unitinfo;
obj.getEstimate = function (unitType, width, height) {
    let priceInfo = this.unit.find(item => item.type == unitType);
    return priceInfo.price * width * height;
}
obj.addUnit = function (unit) {
    this.unit.push(unit);
}
let result = obj.getEstimate('wood', 20, 20);
console.log(result);