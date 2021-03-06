// array_basic3.js
let data = `[{"id":1,"first_name":"Tabbie","last_name":"Sparry","email":"tsparry0@yahoo.co.jp","gender":"Female","salary":1639},
{"id":2,"first_name":"Coriss","last_name":"Babbage","email":"cbabbage1@simplemachines.org","gender":"Female","salary":1271},
{"id":3,"first_name":"Margie","last_name":"Kaplan","email":"mkaplan2@newsvine.com","gender":"Female","salary":2843},
{"id":4,"first_name":"Eduardo","last_name":"Choulerton","email":"echoulerton3@mit.edu","gender":"Polygender","salary":1654},
{"id":5,"first_name":"Sauveur","last_name":"Bertelmot","email":"sbertelmot4@prweb.com","gender":"Male","salary":2128},
{"id":6,"first_name":"Milka","last_name":"Tomkowicz","email":"mtomkowicz5@free.fr","gender":"Genderfluid","salary":1300},
{"id":7,"first_name":"Leanna","last_name":"Camellini","email":"lcamellini6@clickbank.net","gender":"Female","salary":2674},
{"id":8,"first_name":"Ward","last_name":"Johnsson","email":"wjohnsson7@who.int","gender":"Genderqueer","salary":4781},
{"id":9,"first_name":"Hunfredo","last_name":"Fincken","email":"hfincken8@slate.com","gender":"Male","salary":4266},
{"id":10,"first_name":"Stephanus","last_name":"Staries","email":"sstaries9@spiegel.de","gender":"Male","salary":4866},
{"id":11,"first_name":"Craggy","last_name":"Dinnis","email":"cdinnisa@ibm.com","gender":"Male","salary":3877},
{"id":12,"first_name":"Madelene","last_name":"Bloggett","email":"mbloggettb@hc360.com","gender":"Female","salary":1853},
{"id":13,"first_name":"Garrott","last_name":"Scrammage","email":"gscrammagec@behance.net","gender":"Male","salary":3406},
{"id":14,"first_name":"Sofia","last_name":"Deathridge","email":"sdeathridged@youku.com","gender":"Female","salary":2955},
{"id":15,"first_name":"Adorne","last_name":"Gorke","email":"agorkee@indiegogo.com","gender":"Female","salary":4175}]`;

let gender = prompt('Male or Female 을 입력');
console.log(gender);

let objAry = JSON.parse(data); // 문자열 => 오브젝트
console.log(objAry);

// 표(table) 형태로 출력.
//accum: 그 전 순번을 리턴해줌, curr: 이번 순번의 배열에 들어있는 값, 인덱스 값, 배열 그자체
let result = objAry.reduce((accum, curr, currIdx, ary) => {
    if (currIdx == 0) {
        accum += '<table border=1>';
    }
    if (curr.gender == gender) {
        accum += '<tr>';
        for (let field in curr) {
            accum += `<td>${curr[field]}</td>`;
        }
        accum += '</tr>'
    }
    if (currIdx == objAry.legth - 1) {
        accum += '</table>';
    }
    return accum;
}, '');
console.log(result);
document.write(result);