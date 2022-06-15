// variable3/js
let str = '';
str = '<table border =1 >';
let num = 5;
for (let i = 1; i <= 9; i++) {
    str += '<tr><td>' + num + '</td><td>*</td><td>' + i + '</td><td>=</td><td>' + (num * i) + '</td></tr>'
}
str += '</table>';
document.write(str)


str = '<table border =1>';
for (let i = 1; i <= 31; i++) {
    if (i % 7 == 0) {
        str += '<td>' + i + '</td>';
    }
}
str += '</table>';
document.write(str)

//달력
let mon = 9;
showCalendar(mon);

function showCalendar(month){
let days = ['일', '월', '화', '수', '목', '금', '토'];
str = '<table border =1><caption> 2022년 ' + month + '월 달력</caption><tr>';
for (let day of days) {
    str += '<th>' + day + '</th>';
}
str += '</tr><tr>'
let vtd = getFirstDay(month);

for (let i = 1; i < vtd; i++) {
    str += '<td></td>'
}

for (let i = 1; i <= getLastDate(month); i++) {
    str += '<td>' + i + '</td>'
    if ((vtd - 1 + i) % 7 == 0) { //7의배수.
        str += '</tr><tr>';
    }
}
str += '</table>';
document.write(str);
}
function getLastDate(month) {
    //1,3,5,7,8,10,12월 =>31 //4,6,9,11월 => 30 //2월 => 28
    switch (month) {
        case 2:
            return 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        default:
            return 31;
    }
}
console.log(getFirstDay(6));
function getFirstDay(month) {
    switch (month) {
        case 1:
            return 7;
        case 2:
            return 3;
        case 3:
            return 3;
        case 4:
            return 6;
        case 5:
            return 1;
        case 6:
            return 4;
        case 7:
            return 6;
        case 8:
            return 2;
        case 9:
            return 5;
        case 10:
            return 7;
        case 11:
            return 3;
        case 12:
            return 5;
        default:
            0;
    }
}
