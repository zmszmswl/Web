// funtuon.js
// public int SubmitEvent(int a, int b) {

// }
function sum(number1,number2){
    let result = number1 + number2;
    console.log(result);
    return result; //리턴구문이 없으면 undefined. 반환

}
sum(10,20);
console.log(sum(20,20)); //return을 지우면 undefined. 반환
document.write(sum(30,20));

function makeTd(val){
    return '<td>' + val + '</td>';
}
function makeTr(val){
    return '<tr>' + val + '</tr>';
}

let values = ['Hong', 'Hwang', 'Cgoi'];

let str = '<table border=1>';
for(let val of values) {
    let td = makeTd(val); // <td>Hong</td> 
    str += makeTr(td); //<tr><td>Hong</td></tr>
}
str += '</table>';
document.write(str);
